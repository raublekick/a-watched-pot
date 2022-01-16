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
    ]
  },
  rub: {
    type: "fire",
    name: "rub",
    unlocked: false,
    count: 0,
    requirement: { type: "inventory", name: "sticks", count: 2 },
  },
  kindle: {
    type: "fire",
    name: "kindle",
    unlocked: false,
    count: 0,
    requirement: { type: "inventory", name: "kindling", count: 5 },
  },
  place: {
    type: "fire",
    name: "place",
    unlocked: false,
    count: 0,
    requirement: { type: "fire", name: "state", notValue: "cold" },
  },
  stack: {
    type: "fire",
    name: "stack",
    unlocked: false,
    count: 0,
    requirement: { type: "inventory", name: "logs", count: 1 },
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
    ]
  },
  gather: {
    type: "environment",
    name: "gather",
    unlocked: false,
    count: 0,
    requirement: { type: "actions", name: "look", count: 3 },
    messages: ["you try to gather some sticks and leaves...\n"],
    items: [{ type: "inventory", name: "leaves", count: 2 }, { type: "inventory", name: "sticks", count: 0.2 }]
  },
  chop: {
    type: "environment",
    name: "chop",
    requirement: { type: "fire", name: "state", notValue: "cold" }
  },
};
