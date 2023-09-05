import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import Aos from "aos";
Aos.init();

createApp(App).mount("#app");
