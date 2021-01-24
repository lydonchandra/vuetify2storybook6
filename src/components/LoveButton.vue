<template>
  <div>
    <v-btn color="red">
      <v-icon>favorite</v-icon>
    </v-btn>
    <v-alert type="success"> {{ love }} </v-alert>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  components: { }, // <-- and this
  props: ["love"]
});
</script>
