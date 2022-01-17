import actions from "./actions";

const GameState = {
  Playing: "playing",
  Paused: "paused",
  TimeOut: "timeout",
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

const DefaultState = {
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
};

export { GameState, FireState, PotState, DefaultState };
