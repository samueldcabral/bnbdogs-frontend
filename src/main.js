import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
let VueCookie = require("vue-cookie");

Vue.use(VueCookie);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

var VueCookie = require('vue-cookie');
Vue.use(VueCookie);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
