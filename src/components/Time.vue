<template>
  <div>
    <b-progress
      class="mb-1 mt-1"
      :value="time.current"
      :max="time.max"
    ></b-progress>
    <b-modal v-model="timedOut" :can-cancel="false">
      <div class="card">
        <div class="card-content">
          <pre>the day has ended, your eyes have closed...</pre>
          <fieldset class="p-1">
            <legend class="p-1">choose...</legend>
            <div class="columns mt-1 mb-1 has-text-centered is-vcentered">
              <div class="column prestige">
                <b-button
                  @click="upgradePrestige('mind')"
                  size="is-large"
                  icon-left="head-snowflake"
                ></b-button>
                <div>work smarter...</div>
                <div>lvl {{ prestige.woodWeightBonus }}</div>
              </div>
              <div class="column prestige">
                <b-button
                  @click="upgradePrestige('body')"
                  size="is-large"
                  icon-left="arm-flex"
                ></b-button>
                <div>work harder...</div>
                <div>lvl {{ prestige.woodGainsBonus }}</div>
              </div>
              <div class="column prestige">
                <b-button
                  @click="upgradePrestige('spirit')"
                  size="is-large"
                  icon-left="hands-pray"
                ></b-button>
                <div>look inward...</div>
                <div>lvl {{ prestige.woodDecayBonus }}</div>
              </div>
            </div>
            <div
              class="columns mt-1 mb-1 has-text-centered is-vcentered"
              v-if="showTierTwo"
            >
              <div class="column prestige">
                <b-button
                  @click="upgradePrestige('elements')"
                  size="is-large"
                  icon-left="magic-staff"
                ></b-button>
                <div>control the elements...</div>
                <div>lvl {{ prestige.joulesPerSecondBonus }}</div>
              </div>
              <div class="column prestige">
                <b-button
                  @click="upgradePrestige('channel')"
                  size="is-large"
                  icon-left="wizard-hat"
                ></b-button>
                <div>channel your spirit...</div>
                <div>lvl {{ prestige.joulesPenaltyBonus }}</div>
              </div>
            </div>
            <div
              class="columns mt-1 mb-1 has-text-centered is-vcentered"
              v-if="showTierThree"
            >
              <div class="column prestige">
                <b-button
                  @click="upgradePrestige('time')"
                  size="is-large"
                  icon-left="timer-sand-paused"
                ></b-button>
                <div>control gravity itself to bend time in your favor...</div>
                <div>lvl {{ prestige.timeBonus }}</div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { GameState } from "../store/state";
export default {
  name: "TimeBlock",
  data() {
    return {
      timedOut: false,
    };
  },
  computed: {
    ...mapState(["time", "gameState", "prestige"]),
    showTierTwo() {
      return (
        this.prestige.woodWeightBonus >= 3 &&
        this.prestige.woodGainsBonus >= 3 &&
        this.prestige.woodDecayBonus >= 3
      );
    },
    showTierThree() {
      return (
        this.prestige.joulesPerSecondBonus >= 3 &&
        this.prestige.joulesPenaltyBonus >= 3
      );
    },
  },
  methods: {
    ...mapActions(["upgradePrestige"]),
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
