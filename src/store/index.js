import Vue from "vue";
import Vuex from "vuex";
import ACTIONS from "./actions"

Vue.use(Vuex);

const GameState = {
  Playing: "playing",
  Paused: "paused",
};

const PotState = {
  Ice: "ice",
  Puddle: "puddle",
  Simmer: "simmer",
  Boil: "boil"
};

const FireState = {
  Cold: "cold",
  Kindled: "kindled",
  Crackling: "crackling",
  Roaring: "roaring",
};

export default new Vuex.Store({
  state: {
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
    actions: ACTIONS,
    environments: {
      look: {
        name: "look",
        unlocked: false,
        used: 0,
      },
      gather: {
        name: "gather",
        unlocked: false,
        used: 0,
        requirement: { type: "actions", name: "blow", count: 1 },
      },
      chop: {
        name: "chop",
      },
    },
  },
  mutations: {
    changeGameState(state, gameState) {
      state.gameState = gameState;
    },
  },
  actions: {
    tick({ state }) {
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
    },
  },
});
