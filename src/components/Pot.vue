<template>
  <fieldset class="pot p-1">
    <legend class="p-1">pot...</legend>
    <div class="columns">
      <div class="column">
        <div class="art" :class="[artClass]"></div>
      </div>
      <div class="column">
        <div>temperature</div>
        <b-progress type="is-danger" :value="pot.temperature" show-value
          >{{ pot.temperature.toFixed(2) }} C</b-progress
        >
        <div>state: {{ pot.state }}</div>
        <div>mass: {{ pot.mass }}g</div>
        <div>joules: {{ pot.joules.toFixed(2) }}</div>
        <div>joules / s: {{ pot.joulesPerSecond.toFixed(2) }}</div>
      </div>
    </div>
  </fieldset>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PotBlock",
  computed: {
    ...mapState(["pot"]),
    artClass() {
      return "pot-" + this.pot.state;
    },
  },
};
</script>

<style lang="scss"></style>
