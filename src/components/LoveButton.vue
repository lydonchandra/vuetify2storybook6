<template>
  <div>
    <v-btn x-large>
      <v-icon>{{ svgPath }}</v-icon>
      <v-icon>$cancel</v-icon>
    </v-btn>

    <v-alert :type="alertType"> {{ loveText }} </v-alert>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mdiAbacus } from "@mdi/js";

export default Vue.extend({
  components: {},
  props: {
    loveText: {
      type: String,
      required: true
    },
    alertType: {
      type: String,
      required: true
    }
  },
  data: () => ({
    svgPath: mdiAbacus
  })
});
</script>
