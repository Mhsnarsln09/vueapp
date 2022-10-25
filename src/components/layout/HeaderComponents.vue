<template>
  <v-card>
    <v-layout>
      <v-app-bar color="primary">
        <v-toolbar-title>Vue APP</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-col cols="auto">
          <v-row no-gutters>
            <v-col
              cols="auto"
              v-for="(item, i) in navs.filter((x) =>
                getAuthInfo ? x.id != 3 : x
              )"
              :key="i"
            >
              <v-btn @click="onDirection(i)">{{ item.name }}</v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn v-if="getAuthInfo" @click="onLogout">
                <v-icon>mdi-logout</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-app-bar>
      <v-main></v-main>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
import store from "@/store";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  data() {
    return {
      navs: [
        {
          id: 1,
          name: "home",
          auth: true,
        },
        {
          id: 2,
          name: "basket",
          auth: true,
        },
        {
          id: 3,
          name: "login",
          auth: false,
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["getAuthInfo"]),
  },
  methods: {
    onDirection(i: number) {
      const value = this.navs[i].name;
      this.$router.push({ name: value });
    },
    onLogout() {
      store.state.isAuth = false;
      this.$router.push({ name: "login" });
    },
  },
});
</script>
