<template>
  <v-row no-gutters>
    <v-col v-for="(items, i) in dataItem" :key="i" sm="4" lg="3">
      <v-card
        class="ma-4"
        max-width="344"
        height="350px"
        @click="onPush(items.char_id)"
      >
        <v-img :src="items.img" max-height="200px" cover></v-img>
        <v-card-title> {{ items.name }} </v-card-title>
        <v-card-subtitle> {{ items.nickname }} </v-card-subtitle>
        <v-card-text></v-card-text>
        <v-card-actions>
          <AddButton :items="items" />
          <v-spacer></v-spacer>
          <p>{{ price }} TL</p>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col v-if="!dataItem.length && searching.length">
      <div class="d-flex justify-center align-center h-100">
        <h3>Item Not Found</h3>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";
import AddButton from "@/components/Buttons/AddButton.vue";
import DataModels from "@/models/DataModels";

export default defineComponent({
  props: ["searching", "sort"],
  components: {
    AddButton,
  },
  data() {
    return {
      price: 66,
    };
  },
  methods: {
    onPush(i: number) {
      this.$router.push(`/detail/${i}`);
    },
  },
  computed: {
    dataItem() {
      if (this.searching.length >= 3) {
        const fixSearch = this.searching.toLowerCase().replace(/\s/g, "");
        return store.getters.getItems.filter((x: DataModels) =>
          x.name.toLowerCase().replace(/\s/g, "").includes(fixSearch)
        );
      }
      else if(this.sort === "sortAZ"){
        return store.getters.getItems.sort((a:DataModels,b:DataModels) => a.name.localeCompare(b.name))
      } 
      else if(this.sort === "sortZA"){
        return store.getters.getItems.sort((a:DataModels,b:DataModels) => b.name.localeCompare(a.name))
      } 
      else {
        return store.getters.getItems.sort((a:DataModels, b: DataModels)=> a.char_id-b.char_id);
      }
    },
  },
  created() {
    store.dispatch("setPrice", this.price);
  },
});
</script>
