<template>
  <div id="app">
    <section class="container">
      <h1 class="title p-4">a watched pot...</h1>
      <pre class="log" ref="log">{{ messages }}</pre>
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
            <fieldset class="p-1">
              <legend class="p-1">inventory...</legend>
              <div v-for="(item, key) in inventory" :key="key">
                {{ key }}: {{ Math.round(item.count) }}
              </div>
            </fieldset>
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
import Actions from "./components/Actions.vue";
export default {
  name: "App",
  components: { Pot, Fire, Actions },
  methods: {
    ...mapActions(["tick", "trigger"]),
  },
  computed: {
    ...mapState(["actions", "messages", "inventory"]),
    mappedActions() {
      var unlocked = _.filter(this.actions, (action) => {
        return action.unlocked;
      });
      return _.groupBy(unlocked, "type");
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

<style lang="scss">
fieldset {
  border: 3px solid black;
}
.log {
  height: 150px;
  max-height: 150px;
  width: 100%;
}
</style>
