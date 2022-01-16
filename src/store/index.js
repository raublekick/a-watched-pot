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

export default new Vuex.Store({
  state: {
    messages: "",
    gameState: GameState.Playing,
    time: {
      min: 0,
      max: 12 * 60 * 60,
      currentTime: 0,
    },
    pot: {
      state: PotState.Ice,
      joules: -380,
      baseAmbientJoules: 1,
      ambientJoules: 1,
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
    inventory: {
      kindling: 0,
      sticks: 0,
      logs: 0,
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
      if (state.pot.joules < 0) {
        state.pot.joules += state.pot.ambientJoules;
      } else if (state.pot.joules > 0) {
        state.pot.joules -= state.pot.ambientJoules;
      }
      // increment time
      state.time.currentTime++;

      // calculate Joules

      // calculate pot temperature (deltaT = Q/cm)
      var temp = state.pot.joules / (state.pot.specificHeatC * state.pot.mass);
      state.pot.temperature = temp < 0 ? 0 : temp;

      // check if anything needs unlocked
      await dispatch("checkUnlocks");
    },
    async trigger({ state }, action) {
      // add any messages that needed displayed
      if (action.messages && action.messages[action.count]) {
        state.messages += action.messages[action.count];
      }

      // increment usage count
      action.count++;

      // remove any inventory needed
    },
    async checkUnlocks({ state }) {
      // check actions
      Object.keys(state.actions).forEach((key) => {
        // requires an amount of some thing
        if (!state.actions[key].unlocked && state.actions[key].requirement) {
          var req =
            state[state.actions[key].requirement.type][
            state.actions[key].requirement.name
            ];

          if (
            state.actions[key].requirement.count &&
            req.count >= state.actions[key].requirement.count
          ) {
            state.actions[key].unlocked = true;
          }
        }
      });

      // check environments
    },
  },
});
