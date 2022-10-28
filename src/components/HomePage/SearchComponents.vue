<template>
  <v-container>
    <v-row>
      <v-col cols="10">
        <div
          style="
            border: 1px solid black;
            width: 100%;
            outline: none;
            cursor: pointer;
          "
          class="ma-auto rounded-pill pa-2 d-flex"
        >
          <input
            type="text"
            placeholder="Search"
            v-model="searchText"
            class="pa-1 rounded-pill"
            style="width: 100%; outline: none"
          />
          <span class="mdi mdi-magnify mdi-24px pa-1" size="lg"></span>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
  <script lang="ts">

import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  data: () => ({
    searchText: "",
  }), 
  watch:{
    searchText(){
     this.$emit('searchText', this.searchText)
    }
  }   
});
</script>