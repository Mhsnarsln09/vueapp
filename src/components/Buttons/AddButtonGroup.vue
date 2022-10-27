<template>
  <v-btn-toggle variant="outlined" divided style="height: 30px">
    <v-btn class="bg-error ma-0" size="x-small" @click.stop="onAdd('dec')">
      -
    </v-btn>
    <v-btn size="x-small" class="ma-0" @click.stop="">
      {{ items.quantity }}
    </v-btn>
    <v-btn class="bg-success ma-0" size="x-small" @click.stop="onAdd('inc')">
      +
    </v-btn>
  </v-btn-toggle>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import store from "@/store";
export default defineComponent({
  props: ["items"],
  data() {
    return {
      //
    };
  },
  methods: {
    onAdd(i: string) {
      if (i === "inc") {
        store.commit("addToCart", this.items);
      } else {
        store.commit("removeFromCart", this.items);
      }
    },
  },
});
</script>
