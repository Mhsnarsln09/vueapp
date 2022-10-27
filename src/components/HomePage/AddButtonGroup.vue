<template>
  <v-btn-toggle variant="outlined" divided style="height: 30px">
    <v-btn class="bg-error ma-0" size="x-small" @click.stop="onAdd('dec')">
      -
    </v-btn>
    <v-btn size="x-small" class="ma-0" @click.stop="">
      {{ counterValue }}
    </v-btn>
    <v-btn class="bg-success ma-0" size="x-small" @click.stop="onAdd('inc')">
      +
    </v-btn>
  </v-btn-toggle>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  props: ["counterValue"],
  data() {
    return {
      //
    };
  },
  methods: {
    onAdd(value: string) {
      this.$emit("onAdd", value);
    },
  },
});
</script>
