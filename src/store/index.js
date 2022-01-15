import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const GameState = {
  Playing: "playing",
  Paused: "paused",
};

const FireState = {
  Empty: "empty",
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
      joules: -380,
      baseAmbientJoules: 1,
      ambientJoules: 1,
      min: -380,
      max: 380000,
      temperature: 0,
    },
    fire: {
      temp: 0,
      state: FireState.Empty,
      fuel: [],
    },
    inventory: {
      kindling: 0,
      sticks: 0,
      logs: 0,
    },
    actions: {
      watch: {
        name: "watch",
        unlocked: true,
        used: 0,
      },
      blow: {
        name: "blow",
        unlocked: false,
        used: 0,
        requirement: { type: "actions", name: "watch", count: 3 },
      },
      rub: {
        name: "rub",
      },
      kindle: {
        name: "kindle",
      },
      place: {
        name: "place",
      },
      stack: {
        name: "stack",
      },
    },
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
      if (state.pot.joules < 0) {
        state.pot.joules++;
      } else if (state.pot.joules > 0) {
        state.pot.joules--;
      }

      state.time.currentTime++;
    },
  },
});
