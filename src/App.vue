<template>
  <div id="app">
    <section class="container">
      <h1 class="title p-4">A Watched Pot...</h1>
      <pre>{{ messages }}</pre>
      <div class="row">
        <div class="columns">
          <div class="column m-1">
            <pot />
          </div>
          <div class="column m-1">
            <fieldset class="actions">
              <legend>actions...</legend>
              <div v-for="(action, index) in actions" :key="index">
                <b-button v-if="action.unlocked" @click="trigger(action)">{{
                  index
                }}</b-button>
              </div>
            </fieldset>
          </div>
        </div>
        <div class="columns">
          <div class="column m-1">
            <fire />
          </div>
          <fieldset class="environment column m-1">
            <legend>environment...</legend>
            <div v-for="(environment, index) in environments" :key="index">
              <b-button>{{ index }}</b-button>
            </div>
          </fieldset>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Pot from "./components/Pot.vue";
import Fire from "./components/Fire.vue";
export default {
  name: "App",
  components: { Pot, Fire },
  methods: {
    ...mapActions(["tick", "trigger"]),
  },
  computed: {
    ...mapState(["actions", "environments", "messages"]),
  },
  created() {
    setInterval(() => {
      this.tick();
    }, 1000);
  },
};
</script>

<style lang="scss">
fieldset {
  border: 3px solid black;
}
</style>
