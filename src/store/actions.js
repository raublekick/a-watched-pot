export default {
  watch: {
    name: "watch",
    unlocked: true,
    count: 0,
  },
  blow: {
    name: "blow",
    unlocked: false,
    count: 0,
    requirement: { type: "actions", name: "watch", count: 3 },
  },
  rub: {
    name: "rub",
    unlocked: false,
    count: 0,
    requirement: { type: "inventory", name: "sticks", count: 2 },
  },
  kindle: {
    name: "kindle",
    unlocked: false,
    count: 0,
    requirement: { type: "inventory", name: "kindling", count: 5 },
  },
  place: {
    name: "place",
    unlocked: false,
    count: 0,
    requirement: { type: "fire", name: "state", notValue: "cold" },
  },
  stack: {
    name: "stack",
    unlocked: false,
    count: 0,
    requirement: { type: "inventory", name: "logs", count: 1 },
  },
};
