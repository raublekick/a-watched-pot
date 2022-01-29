<template>
  <fieldset class="p-1 actions">
    <legend class="p-1">{{ title }}</legend>
    <template v-for="(action, index) in items">
      <b-button
        v-if="action.unlocked"
        :key="index"
        class="m-1"
        @click="trigger(action)"
        >{{ action.name }}</b-button
      >
    </template>
  </fieldset>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "ActionList",
  props: {
    items: {
      required: true,
      default() {
        return [];
      },
    },
    title: {
      required: true,
      default() {
        return "";
      },
    },
  },
  methods: {
    ...mapActions(["trigger"]),
  },
};
</script>
<style lang="scss"></style>
