import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import * as _ from "lodash";

Vue.use(Vuex);

const GameState = {
  Playing: "playing",
  Paused: "paused",
};

const PotState = {
  Ice: "ice",
  Puddle: "puddle",
  Simmer: "simmer",
  Boil: "boil",
};

const FireState = {
  Cold: "cold",
  Kindled: "kindled",
  Crackling: "crackling",
  Roaring: "roaring",
};

const PowerPerHour = 1;
const PowerPerSecond = PowerPerHour * 3600;

export default new Vuex.Store({
  state: {
    messages: "",
    ambientTemperature: 22,
    gameState: GameState.Playing,
    time: {
      min: 0,
      max: 12 * 60 * 60,
      current: 0,
      rate: 1000,
    },
    pot: {
      state: PotState.Ice,
      joules: -380,
      joulesPerSecond: 0,
      min: -380,
      max: 380000,
      temperature: 0,
      mass: 1000,
      specificHeatC: 4.186,
    },
    fire: {
      temp: 0,
      state: FireState.Cold,
      fuel: [],
    },
    items: {
      kindling: {
        name: "kindling",
        decay: 0.1,
        weight: 1,
      },
      sticks: {
        name: "sticks",
        decay: 1,
        weight: 20,
      },
      logs: {
        name: "logs",
        decay: 1,
        weight: 60,
      },
    },
    inventory: {
      kindling: { count: 0 },
      sticks: { count: 0 },
      logs: { count: 0 },
    },
    actions: actions,
  },
  mutations: {
    changeGameState(state, gameState) {
      state.gameState = gameState;
    },
  },
  actions: {
    async tick({ state, dispatch }) {
      // apply ambient enery gain/loss
      // if ambient > pot temp, increase, else decrease
      state.pot.joulesPerSecond =
        (state.ambientTemperature - state.pot.temperature) / 10;

      // increment time
      state.time.current += state.time.rate;

      if (state.fire.state !== FireState.Cold) {
        var totalFuels = 0;
        _.forEach(state.fire.fuel, (fuel) => {
          var output = PowerPerSecond * (fuel.weight / 1000);
          totalFuels += output;
          fuel.weight -= fuel.decay;
        });
        state.pot.joulesPerSecond += totalFuels;

        // remove any burned up fuel
        state.fire.fuel = _.filter(state.fire.fuel, (fuel) => {
          return fuel.weight > 0;
        });
      }

      // TODO: calculate Joules,
      // TODO: add a joules bonus array
      // similar to fuel w/ amt and decay.
      // TODO: Calculate total bonus and remove decayed itms.

      state.pot.joules += state.pot.joulesPerSecond;

      // calculate pot temperature (deltaT = Q/cm)
      var temp = state.pot.joules / (state.pot.specificHeatC * state.pot.mass);
      state.pot.temperature = temp < 0 ? 0 : temp;

      if (state.fire.fuel.length === 0) {
        state.fire.state = FireState.Cold;
      }

      // check if anything needs unlocked
      await dispatch("checkUnlocks");
    },
    async kindle({ state }, items) {
      // check if inventory contains the items we need
      var missing = false;
      _.forEach(items, (item) => {
        if (item.count > state[item.type][item.name].count) {
          state.messages += item.message;
          missing = true;
          return;
        }
      });

      if (state.fire.state === FireState.Kindled) {
        state.messages += "there's no point when the fire is started...\n";
      }

      if (!missing && state.fire.state !== FireState.Kindled) {
        state.fire.state = FireState.Kindled;
        if (!state.actions.chop.unlocked) {
          state.messages +=
            "with the fire lit, you see the glint of an axe blade...\n";
        }
      }
    },
    async handleMessages({ state }, action) {
      if (action.messages && action.messages[action.count]) {
        state.messages += action.messages[action.count];
      } else if (action.messages) {
        state.messages += action.messages[0];
      }
    },
    async addInventory({ state }, action) {
      if (action.gains) {
        _.forEach(action.gains, (gain) => {
          state[gain.type][gain.name].count += gain.count;
        });
      }
    },
    async removeInventory({ state }, items) {
      var missing = false;
      _.forEach(items, (cost) => {
        if (cost.count > state[cost.type][cost.name].count) {
          missing = true;
          return;
        }
        state[cost.type][cost.name].count -= cost.count;
      });
      return !missing;
    },
    async fuel({ state, dispatch }, fuels) {
      // try to remove decrement inventory
      var removed = await dispatch("removeInventory", fuels);
      if (!removed) {
        state.messages += "you don't have enough for that...\n";
        return;
      }

      // add fuels to fire
      _.forEach(fuels, (fuel) => {
        var item = state.items[fuel.name];

        for (var i = 0; i < fuel.count; i++) {
          state.fire.fuel.push(Object.assign({}, item));
        }
      });
    },
    async trigger({ dispatch }, action) {
      // increment usage count
      action.count++;

      // add any messages that needed displayed
      await dispatch("handleMessages", action);

      // handle inventory gains
      await dispatch("addInventory", action);

      // TODO: remove any inventory needed

      if (action.handler) {
        await dispatch(action.handler.name, action.handler.args);
      }

      await dispatch("checkUnlocks");
    },
    // TODO: disable items? i.e. no rubbing if fire state is not cold or if no sticks
    async checkUnlocks({ state }) {
      // check actions
      Object.keys(state.actions).forEach((key) => {
        // requires an amount of some thing
        if (!state.actions[key].unlocked && state.actions[key].requirement) {
          var req =
            state[state.actions[key].requirement.type][
              state.actions[key].requirement.name
            ];

          // check based on object count
          if (
            state.actions[key].requirement.count &&
            req.count >= state.actions[key].requirement.count
          ) {
            state.actions[key].unlocked = true;
          }

          // check based on object state
          if (
            state.actions[key].requirement.notValue &&
            req !== state.actions[key].requirement.notValue
          ) {
            state.actions[key].unlocked = true;
          }
        }
      });
    },
  },
});
