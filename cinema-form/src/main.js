import Vue from "vue";
import App from "@/App.vue";
import router from "@/router/index.js";
import Vuelidate from "vuelidate";
import "@/styles/var.scss";
import "@/styles/main.scss";
import "@/styles/media.scss";

Vue.use(Vuelidate);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
