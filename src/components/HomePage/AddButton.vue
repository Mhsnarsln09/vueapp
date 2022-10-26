<template>
  <div v-if="count" class="d-flex align-center flex-column" >
   <add-button-group :count="count" @onAdd="onAdd"></add-button-group>
  </div>
  <div v-else>
    <v-btn color="white" class="bg-secondary" @click.stop="onAdd('inc')">
      <span class="text-white">Add</span>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import AddButtonGroup from "./AddButtonGroup.vue"

export default defineComponent({
  props: ["items"],
  components:{
    AddButtonGroup
  },
  data() {
    return { count: 0 };
  },

  methods: {
    onAdd(i: string) {
      if (i === "inc") {
        if (this.count < 5) {
          this.count++;
          console.log("items", this.items);
        } else {
          alert("too much");
        }
      } else {
        this.count--;
      }
    },
  },
});
</script>
