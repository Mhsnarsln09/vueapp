<template>
  <v-app>
    <header-lay />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderLay from "@/components/layout/HeaderComponents.vue";
import store from "./store";

export default defineComponent({
  name: "App",

  data() {
    return {
      //
    };
  },
  components: {
    HeaderLay,
  },
  created() {
    store.dispatch("setItems");
  },
});
</script>
