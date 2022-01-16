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
          >{{ pot.temperature }} C</b-progress
        >
        <div>state: {{ pot.state }}</div>
        <div>mass: {{ pot.mass }}g</div>
        <div>joules: {{ pot.joules }}</div>
        <!-- TODO: calculate j/s -->
        <div>joules / s:</div>
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

<style lang="scss">
.pot {
  border: 3px solid black;
}
</style>
