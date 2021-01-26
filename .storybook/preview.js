import Vue from 'vue'
import Vuetify from 'vuetify'
import { options } from '@/plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);

const vuetify = new Vuetify(options);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (story, context) => {
    const wrapped = story(context);

    return Vue.extend({
      vuetify,
      components: { wrapped },
      // props: {},
      // watch: {},
      template:
        `<v-app><v-container fluid><wrapped /></v-container></v-app>`
    })
  }
]
