<template>
  <div>
    <v-btn x-large>
      <v-icon>{{ svgPath }}</v-icon>
      <v-icon>$cancel</v-icon>
      <v-icon>$file</v-icon>
    </v-btn>

    <v-alert :type="alertType"> {{ loveText }} </v-alert>

    <v-chip-group
        active-class="primary--text"
        column
    >
      <v-chip
          v-for="tag in tags"
          :key="tag"
      >
        {{ tag }}
      </v-chip>
    </v-chip-group>

<!--    <v-list-item two-line>-->
<!--      <v-list-item-content>-->
<!--        <v-list-item-title>Two-line item</v-list-item-title>-->
<!--        <v-list-item-subtitle>Secondary text</v-list-item-subtitle>-->
<!--      </v-list-item-content>-->
<!--    </v-list-item>-->

<!--    <v-select-->
<!--      v-model="value"-->
<!--      :items="items"-->
<!--      attach-->
<!--      chips-->
<!--      label="Chips"-->
<!--      multiple-->
<!--    ></v-select>-->

    <v-file-input multiple label="File input"></v-file-input>
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
    svgPath: mdiAbacus,
    value: true,
    items: [1, 2, 3],
    tags: [ 'dog', 'cat', 'pig']
  })
});
</script>
