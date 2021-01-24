import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import { UserVuetifyPreset } from "vuetify";

Vue.use(Vuetify);

export const options: UserVuetifyPreset = {
  icons: {
    iconfont: "mdi"
  }
};

export default new Vuetify(options);
