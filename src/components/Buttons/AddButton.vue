<template>
  <div v-if="count?.char_id" class="d-flex align-center flex-column">
    <KeepAlive>
      <add-button-group :items="count"></add-button-group>
    </KeepAlive>
  </div>
  <div v-else>
    <v-btn color="white" class="bg-secondary" @click.stop="onAdd">
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
      //
    };
  },
  computed: {
    count() {
      return store.state.basket.find((i) => i.char_id == this.items.char_id);
    },
  },
  methods: {
    onAdd() {
      store.commit("addToCart", this.items);
    },
  },
});
</script>
