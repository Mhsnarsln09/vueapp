<template>
    <v-card
      class="mx-auto"
      color="grey-lighten-3"
      max-width="500"
    >
      <v-card-text>
        <v-text-field
          :loading="loading"
          density="compact"
          variant="solo"
          label="Search templates"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
          @click:append-inner="onClick"
        ></v-text-field>
      </v-card-text>
    </v-card>
  </template>
  <script lang="ts">
import { defineComponent } from "@vue/runtime-core"

  export default defineComponent( {
    data: () => ({
      loaded: false,
      loading: false,
    }),

    methods: {
      onClick () {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
    },
  })
</script>
<!-- filtered() {
    if (this.searchText.length >= 1) {
      const fixSearchText = this.searchText.toLowerCase().trim();
      return this.debtList.filter((item) =>
        item.name.toLowerCase().trim().includes(fixSearchText)
      );
    } else {
      return this.debtList;
    } -->