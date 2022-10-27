<template>
  <div v-if="count" class="d-flex align-center flex-column">
    <add-button-group
      :counterValue="counterValue"
      @onAdd="onAdd"
    ></add-button-group>
  </div>
  <div v-else>
    <v-btn color="white" class="bg-secondary" @click.stop="onAdd('inc')">
      <span class="text-white">Add</span>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AddButtonGroup from "./AddButtonGroup.vue";
import store from "@/store";

export default defineComponent({
  props: ["items"],
  components: {
    AddButtonGroup,
  },
  data() {
    return {
      counterValue: 0 as any,
    };
  },
  computed: {
    count() {
      return store.state.basket.find((i) => i.char_id === this.items.char_id)
        ?.quantity;
    },
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
  watch: {
    count() {
      this.counterValue = store.state.basket.find(
        (i) => i.char_id === this.items.char_id
      )?.quantity;
    },
  },
});
</script>
