<template>
  <v-btn color="white" class="bg-secondary" @click.stop="onAdd(items.char_id)">
    <span class="text-white">Add</span>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: ["items"],
  methods: {
    onAdd(i: number) {
      console.log("add", i);
    },
  },
});
</script>
