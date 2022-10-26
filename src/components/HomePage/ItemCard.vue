<template>
  <v-row no-gutters>
    <v-col v-for="(items, i) in getItems" :key="i" sm="4" lg="3">
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
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";
import { mapGetters } from "vuex";
import AddButton from "./AddButton.vue";

export default defineComponent({
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
    ...mapGetters(["getItems"]),
  },
  created() {
    store.dispatch("setPrice", this.price);
  },
});
</script>
