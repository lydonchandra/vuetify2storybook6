<template>
  <div>
    <v-btn>
      <v-icon>{{ svgPath }}</v-icon>
      <v-icon>$cancel</v-icon>
    </v-btn>

    <v-alert type="success"> {{ love }} </v-alert>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mdiAbacus } from "@mdi/js";

export default Vue.extend({
  components: {}, // <-- and this
  props: ["love"],
  data: () => ({
    svgPath: mdiAbacus
  })
});
</script>
