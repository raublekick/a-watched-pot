<template>
  <div id="app" :class="artClass">
    <section class="container">
      <h1 class="title p-4">a watched pot...</h1>
      <pre class="log big-log" ref="log">{{ messages }}</pre>
      <time-block />
      <div class="row">
        <div class="columns">
          <div class="column m-1">
            <pot />
            <fire />
          </div>
          <div class="column m-1">
            <template v-for="(group, index) in mappedActions">
              <actions :key="index" :items="group" :title="index"></actions>
            </template>
            <fieldset
              class="p-1"
              v-if="
                prestige.autoKindle.unlocked ||
                prestige.autoChop.unlocked ||
                prestige.autoStack.unlocked
              "
            >
              <legend class="p-1">tools</legend>
              <b-button
                v-if="prestige.autoKindle.unlocked"
                class="m-1"
                @click="
                  prestige.autoKindle.active = !prestige.autoKindle.active
                "
                >fire starter
                {{ prestige.autoKindle.active ? "(active)" : "(inactive)" }}
              </b-button>

              <b-button
                v-if="prestige.autoChop.unlocked"
                class="m-1"
                @click="prestige.autoChop.active = !prestige.autoChop.active"
                >wood cutter
                {{ prestige.autoChop.active ? "(active)" : "(inactive)" }}
              </b-button>

              <b-button
                v-if="prestige.autoStack.unlocked"
                class="m-1"
                @click="prestige.autoStack.active = !prestige.autoStack.active"
                >builder
                {{ prestige.autoStack.active ? "(active)" : "(inactive)" }}
              </b-button>
            </fieldset>
            <div class="columns">
              <div class="column">
                <fieldset class="p-1">
                  <legend class="p-1">inventory...</legend>
                  <div v-for="(item, key) in inventory" :key="key">
                    {{ key }}: {{ Math.floor(item.count) }}
                  </div>
                </fieldset>
                <fieldset class="p-1" v-if="prestige.level > 1">
                  <legend class="p-1">stats...</legend>
                  <div>level: {{ prestige.level }}</div>
                  <div v-if="prestige.woodWeightBonus > 1">
                    mind: {{ prestige.woodWeightBonus }}
                  </div>
                  <div v-if="prestige.woodGainsBonus > 1">
                    body: {{ prestige.woodGainsBonus }}
                  </div>
                  <div v-if="prestige.woodDecayBonus > 1">
                    spirit: {{ prestige.woodDecayBonus }}
                  </div>
                  <div v-if="prestige.joulesPerSecondBonus > 1">
                    elements: {{ prestige.joulesPerSecondBonus }}
                  </div>
                  <div v-if="prestige.joulesPenaltyBonus > 1">
                    channeling: {{ prestige.joulesPenaltyBonus }}
                  </div>
                  <div v-if="prestige.timeBonus > 1">
                    chronos: {{ prestige.timeBonus }}
                  </div>
                </fieldset>
              </div>
              <div class="column">
                <fieldset class="p-1">
                  <legend class="p-1">items...</legend>
                  <div v-for="(item, key) in items" :key="key" class="columns">
                    <div class="column">{{ key }}</div>
                    <div class="column">
                      weight:
                      {{ (item.weight * prestige.woodWeightBonus).toFixed(2) }}
                    </div>
                    <div class="column">
                      decay:
                      {{ (item.decay / prestige.woodDecayBonus).toFixed(2) }}
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import * as _ from "lodash";
import Pot from "./components/Pot.vue";
import Fire from "./components/Fire.vue";
import TimeBlock from "./components/Time.vue";
import Actions from "./components/Actions.vue";
export default {
  name: "App",
  components: { Pot, Fire, Actions, TimeBlock },
  methods: {
    ...mapActions(["tick", "trigger"]),
  },
  computed: {
    ...mapState([
      "actions",
      "messages",
      "inventory",
      "items",
      "time",
      "prestige",
      "fire",
    ]),
    mappedActions() {
      var unlocked = _.filter(this.actions, (action) => {
        return action.unlocked;
      });
      return _.groupBy(unlocked, "type");
    },
    artClass() {
      return "app-fire-" + this.fire.state;
    },
  },
  created() {
    setInterval(() => {
      this.tick();
    }, 1000);
  },
  watch: {
    messages() {
      this.$nextTick(() => {
        this.$refs.log.scrollTop = this.$refs.log.scrollHeight;
      });
    },
  },
};
</script>

<style lang="scss"></style>
