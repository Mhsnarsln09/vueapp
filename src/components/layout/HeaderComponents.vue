<template>
  <v-card>
    <v-layout>  
      <v-app-bar color="primary" >
        <v-toolbar-title>Vue APP</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn v-for="(item, i) in navs" :key="i" @click="onDirection(i)">{{
          item.name
        }}</v-btn>
      </v-app-bar>
      <v-main></v-main>
    </v-layout>
  </v-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      navs: [
        {
          id: 1,
          name: "home",
        },
        {
          id: 2,
          name: "about",
        },
        {
          id: 3,
          name: "login",
        },
      ],
    };
  },
  methods: {
    onDirection(i) {
      const value = this.navs[i].name;
      this.$router.push({ name: value });
    },
  },
});
</script>
