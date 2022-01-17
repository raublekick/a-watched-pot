<template>
  <div>
    <b-progress
      class="mb-1 mt-1"
      :value="time.current"
      :max="time.max"
    ></b-progress>
    <b-modal v-model="timedOut" :can-cancel="false"> GAME OVER </b-modal>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { GameState } from "../store/state";
export default {
  name: "TimeBlock",
  data() {
    return {
      timedOut: false,
    };
  },
  computed: {
    ...mapState(["time", "gameState"]),
  },
  watch: {
    gameState() {
      if (this.gameState === GameState.TimeOut) {
        this.timedOut = true;
      } else {
        this.timedOut = false;
      }
    },
  },
};
</script>
