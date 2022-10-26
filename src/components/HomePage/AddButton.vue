<template>
  <div v-if="count" class="d-flex align-center flex-column" size="x-small">
    <v-btn-toggle variant="outlined" divided style="height: 30px">
      <v-btn class="bg-error ma-0" size="x-small" @click.stop=""> - </v-btn>
      <v-btn size="x-small" class="ma-0" @click.stop="">
        {{ count }}
      </v-btn>
      <v-btn class="bg-success ma-0" size="x-small" @click.stop="onAdd">
        +
      </v-btn>
    </v-btn-toggle>
  </div>
  <div v-else>
    <v-btn
      color="white"
      class="bg-secondary"
      @click.stop="onAdd(items.char_id)"
    >
      <span class="text-white">Add</span>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: ["items"],
  data() {
    return { count: 0 };
  },
  methods: {
    onAdd(i: number) {
      console.log("add", i);
      this.count++;
      console.log("count", this.count);
    },
  },
});
</script>
