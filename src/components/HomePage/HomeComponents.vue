<template>
  <v-container>
    <v-row>
      <v-col>
        <search-components @searchText="searchText" @sortData="sortData" />
        <item-card :searching="searching" :sort="sort" ></item-card>
      </v-col>
    </v-row>
  </v-container>
  <router-view></router-view>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import ItemCard from "./ItemCard.vue";
import SearchComponents from "./SearchComponents.vue";
export default defineComponent({
  components: {
    ItemCard,
    SearchComponents,
  },
  data(){
    return {
      searching:"",
      sort:""
    }
  },
 methods:{
  searchText(value:string){
this.searching = value
  },
  sortData(value:string){
    this.sort = value     
  }
 }
  });
</script>
