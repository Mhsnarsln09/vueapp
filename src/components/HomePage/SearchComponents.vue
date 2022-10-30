<template>
  <v-container>
    <v-row>
      <v-col cols="11">
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
      <v-col cols="1">
        <sort-button-component class="h-100 w-25 pa-1 ml-1"/>
      </v-col>
    </v-row>
  </v-container>
</template>
  <script lang="ts">

import { defineComponent } from "@vue/runtime-core";
import SortButtonComponent from "../Buttons/SortButtonComponent.vue"
export default defineComponent({
  components:{
    SortButtonComponent
  },
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