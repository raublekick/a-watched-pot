import Vue from "vue";
import App from "./App.vue";
import store from "./store/index.js";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import "./assets/style.scss";

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  store: store,
  render: (h) => h(App),
}).$mount("#app");
