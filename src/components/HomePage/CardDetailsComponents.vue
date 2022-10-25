<template>
  <div>
    <h2>{{ data.name }}</h2>
    <h3>{{ data.category }}</h3>
    <h3>{{ data.status }}</h3>
    <h3 v-for="(occupation, i) in data.occupation" :key="i">
      {{ occupation }}
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: ["data"],
});
</script>
