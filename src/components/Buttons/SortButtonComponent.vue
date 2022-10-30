<template>
  <div class="d-flex justify-space-around">
    <v-menu transition="scale-transition">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" class="h-100 pa-1"
          ><span class="mdi mdi-filter mdi-24px"></span
        ></v-btn>
      </template>

      <v-list style="cursor: pointer">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

  <script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  data: () => ({
    items: [{ title: "A-Z" }, { title: "Z-A" }],
  }),
});
</script>