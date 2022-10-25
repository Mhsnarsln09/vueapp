<template>
  <v-container>
    <item-card></item-card>
  </v-container>
  <router-view></router-view>
</template>

<script>
import { defineComponent } from "vue";
import ItemCard from "./ItemCard.vue";
export default defineComponent({
  components: {
    ItemCard,
  },
});
</script>
