<template>
  <v-card style="position: sticky; top: 0; z-index: 2">
    <v-layout>
      <v-app-bar color="primary">
        <v-btn @click.stop="onDirection(0)">
          <v-toolbar-title>APP</v-toolbar-title></v-btn
        >
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
              <v-btn @click="onDirection(i)"
                >{{ item.name }}
                <div :class="item.class" v-if="getBasket.length">
                  <span class="bg-red rounded-circle ma-1 pa-1">
                    {{ getBasket.length }}</span
                  >
                </div>
              </v-btn>
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
          class: "d-none",
        },
        {
          id: 2,
          name: "basket",
          class: "d-block",
        },
        {
          id: 3,
          name: "login",
          class: "d-none",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["getAuthInfo", "getBasket"]),
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
