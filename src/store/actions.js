export default {
  watch: {
    type: "pot",
    name: "watch",
    unlocked: true,
    count: 0,
    messages: [
      "you watch the pot...\n",
      "you watch the pot some more...\n",
      "you continue watching the pot...\n",
    ],
  },
  blow: {
    type: "pot",
    name: "blow",
    unlocked: false,
    count: 0,
    requirement: { type: "actions", name: "watch", count: 3 },
    messages: [
      "you blow on the pot...\n",
      "you blow on the pot again...\n",
      "you blow on the pot and think you should look for another way...\n",
    ], // TODO: add handler for blowing on pot or blowing on flames
  },
  rub: {
    type: "fire",
    name: "rub",
    unlocked: false,
    count: 0,
    requirement: { type: "inventory", name: "sticks", count: 2 },
    handler: {
      name: "kindle",
      args: [
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
      ],
    },
  },
  kindle: {
    type: "fire",
    name: "kindle",
    unlocked: false,
    count: 0,
    requirement: { type: "inventory", name: "kindling", count: 5 },
    handler: {
      name: "fuel",
      args: [
        {
          type: "inventory",
          name: "kindling",
          count: 5,
        },
      ],
    },
  },
  place: {
    type: "fire",
    name: "place",
    unlocked: false,
    count: 0,
    requirement: { type: "fire", name: "state", notValue: "cold" },
    handler: {
      name: "fuel",
      args: [
        {
          type: "inventory",
          name: "sticks",
          count: 1,
        },
      ],
    },
  },
  stack: {
    type: "fire",
    name: "stack",
    unlocked: false,
    count: 0,
    requirement: { type: "inventory", name: "logs", count: 1 },
    handler: {
      name: "fuel",
      args: [
        {
          type: "inventory",
          name: "logs",
          count: 1,
        },
      ],
    },
  },
  look: {
    type: "environment",
    name: "look",
    unlocked: false,
    count: 0,
    requirement: { type: "actions", name: "blow", count: 3 },
    messages: [
      "you look around...\n",
      "you look around some more, but it is very dark...\n",
      "you take one last look and notice that you are surrounded by sticks and leaves...\n",
    ],
  },
  gather: {
    type: "environment",
    name: "gather",
    unlocked: false,
    count: 0,
    requirement: { type: "actions", name: "look", count: 3 },
    messages: ["you try to gather some sticks and leaves...\n"],
    gains: [
      { type: "inventory", name: "kindling", count: 2 },
      { type: "inventory", name: "sticks", count: 0.2 },
    ],
  },
  chop: {
    type: "environment",
    name: "chop",
    requirement: { type: "fire", name: "state", notValue: "cold" },
    messages: ["you chop at a log, this is real work...\n"],
    gains: [{ type: "inventory", name: "logs", count: 0.1 }],
  },
};
