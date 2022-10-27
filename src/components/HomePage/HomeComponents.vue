<template>
  <v-container>
    <v-row>
      <v-col>
        <search-components/>
        <item-card></item-card>
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
    SearchComponents
  },
});
</script>
