<template>
  <fieldset class="fire p-1">
    <legend class="p-1">fire...</legend>
    <div class="columns">
      <div class="column">
        <div class="art" :class="[artClass]"></div>
      </div>
      <div class="column">
        <div>state: {{ fire.state }}</div>
        <!-- TODO: add fuel -->
        <div>fuel:</div>
        <!-- TODO: add energy output calculation -->
      </div>
    </div>
  </fieldset>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "FireBlock",
  computed: {
    ...mapState(["fire"]),
    artClass() {
      return "fire-" + this.fire.state;
    },
  },
};
</script>
<style lang="scss">
.fire {
  border: 3px solid black;
}
</style>