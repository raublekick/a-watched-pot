import Vue from "vue";
import Vuex from "vuex";
import { GameState, FireState, PotState, DefaultState } from "./state";
import * as _ from "lodash";

Vue.use(Vuex);

const PowerPerHour = 1;
const PowerPerSecond = PowerPerHour * 3600;

export default new Vuex.Store({
  state: DefaultState,
  mutations: {
    changeGameState(state, gameState) {
      state.gameState = gameState;
    },
  },
  actions: {
    async tick({ state, dispatch }) {
      // increment time and scale based on temp
      //var scale = state.pot.temperature > 10 ? state.pot.temperature / 10 : 1;
      var scale = state.prestige.timeBonus;
      state.time.current += state.time.rate / scale;

      // set timeout state if time is up
      if (state.time.current >= state.time.max) {
        state.gameState = GameState.TimeOut;
        return;
      }

      if (state.prestige.autoKindle.active) {
        await dispatch("kindle", [
          {
            type: "inventory",
            name: "sticks",
            count: 2,
            message: "you don't have two sticks to rub together...\n",
          },
          {
            type: "inventory",
            name: "kindling",
            count: 1,
            message: "you rub the sticks and see a brief flame...\n",
          },
        ]);
      }

      if (state.prestige.autoChop.active) {
        // trigger gather and chop actions
        await dispatch("addInventory", state.actions["gather"]);
        await dispatch("addInventory", state.actions["chop"]);
      }

      if (state.prestige.autoStack.active) {
        // trigger stack, place, and kindle
        // await dispatch("fuel", [
        //   {
        //     type: "inventory",
        //     name: "kindling",
        //     count: 5,
        //   },
        // ]);
        // await dispatch("fuel", [
        //   {
        //     type: "inventory",
        //     name: "sticks",
        //     count: 1,
        //   },
        // ]);
        await dispatch("fuel", [
          {
            type: "inventory",
            name: "logs",
            count: 1,
          },
        ]);
      }

      // apply ambient enery gain/loss
      // if ambient > pot temp, increase, else decrease
      state.pot.joulesPerSecond =
        (state.ambientTemperature - state.pot.temperature) / 10;

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

      // apply penalty based on how close to 100, apply bonus based on prestige
      var modifier =
        state.pot.temperature < 100
          ? (100 - state.pot.temperature) /
            (100 - state.prestige.joulesPenaltyBonus + 1)
          : 1;
      state.pot.joulesPerSecond =
        state.pot.joulesPerSecond *
        modifier *
        state.prestige.joulesPerSecondBonus;
      state.pot.joules += state.pot.joulesPerSecond;

      // calculate pot temperature (deltaT = Q/cm)
      var temp = state.pot.joules / (state.pot.specificHeatC * state.pot.mass);
      if (temp >= 100) {
        state.pot.temperature = 100;
      } else {
        state.pot.temperature = temp < 0 ? 0 : temp;
      }

      console.log(state.pot.temperature);
      // set fire state
      var logs = _.filter(state.fire.fuel, (item) => {
        return item.name === "logs";
      });
      if (state.fire.state !== FireState.Cold && logs.length > 10) {
        state.fire.state = FireState.Roaring;
      } else if (state.fire.state !== FireState.Cold && logs.length > 0) {
        state.fire.state = FireState.Crackling;
      } else if (state.fire.fuel.length === 0) {
        state.fire.state = FireState.Cold;
      }

      // set pot state
      if (state.pot.temperature < 0) {
        state.pot.state = PotState.Ice;
      } else if (state.pot.temperature > 0 && state.pot.temperature < 70) {
        state.pot.state = PotState.Puddle;
      } else if (state.pot.temperature >= 70 && state.pot.temperature < 100) {
        state.pot.state = PotState.Simmer;
      } else if (state.pot.temperature >= 100) {
        state.pot.state = PotState.Boiling;
      }

      if (state.pot.state === PotState.Boiling) {
        state.pot.ticksAtBoiling++;
        // TODO: Calculate % complete for joules required to change state vs current joules
        console.log(state.pot.ticksAtBoiling);
      } else {
        state.pot.ticksAtBoiling = 0;
      }

      // TODO: set boil state as win state
      // else if (state.pot.temp >= 100) {
      //   state.pot.state = PotState.Boil;
      // }

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
          // apply wood gains bonus
          state[gain.type][gain.name].count +=
            gain.count * state.prestige.woodGainsBonus;
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
        var item = Object.assign({}, state.items[fuel.name]);

        // apply prestige bonus
        item.weight = item.weight * state.prestige.woodWeightBonus;
        item.decay = item.decay / state.prestige.woodDecayBonus;

        for (var i = 0; i < fuel.count; i++) {
          state.fire.fuel.push(item);
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
    async upgradePrestige({ state }, stat) {
      if (stat === "mind") {
        state.prestige.woodWeightBonus++;
      } else if (stat === "body") {
        state.prestige.woodGainsBonus++;
      } else if (stat === "spirit") {
        state.prestige.woodDecayBonus++;
      } else if (stat === "elements") {
        state.prestige.joulesPerSecondBonus++;
      } else if (stat === "channel") {
        state.prestige.joulesPenaltyBonus++;
      } else if (stat === "time") {
        state.prestige.timeBonus++;
      } else if (state === "autoKindle") {
        state.prestige.autoKindle.active = true;
        state.prestige.autoKindle.unlocked = true;
      } else if (state === "autoChop") {
        state.prestige.autoChop.active = true;
        state.prestige.autoChop.unlocked = true;
      } else if (state === "autoStack") {
        state.prestige.autoStack.active = true;
        state.prestige.autoChop.unlocked = true;
      }

      state.prestige.level++;
      state.time.current = 0;
      state.pot.joulesPerSecond = 0;
      state.pot.joules = state.pot.min;
      state.pot.state = PotState.Ice;
      state.fire.fuel = [];
      state.fire.state = FireState.Cold;
      state.gameState = GameState.Playing;
    },
  },
});
