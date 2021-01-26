import Vue from "vue";
import Vuetify from "vuetify/lib";
import { UserVuetifyPreset } from "vuetify";

Vue.use(Vuetify);

export const options: UserVuetifyPreset = {
  icons: {
    iconfont: "mdiSvg",
  }
};

export default new Vuetify(options);
