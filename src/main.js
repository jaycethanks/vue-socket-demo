import Vue from "vue";
import App from "./App.vue";
import "animate.css";
import "@/components/Noticer/NotificationBanner.js";

// import * as io from "socket.io-client";
// import VueSocketIO from "vue-socket.io";

// Vue.use(
//   new VueSocketIO({
//     debug: true,
//     connection: io("/"), // options object is Optional
//   }),
// );

// Vue.use(
//   new VueSocketIO({
//     debug: true,
//     connection: "/",
//     options: { path: "/wsapi/v1.0/join", transports: ["websocket"] },
//   }),
// );
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
