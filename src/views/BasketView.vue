<template>
  <v-app>
    <v-table theme="dark">
      <thead>
        <tr>
          <th class="text-left" @click.prevent="onLog">Name</th>
          <th class="text-left">Calories</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in getItems" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.nickname }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import store from "@/store";
export default defineComponent({
  data() {
    return {
      //
    };
  },
  methods: {
    onLog() {
      console.log("getItems", this.getItems);
      console.log("store.getters", store.state.items);
    },
  },
  computed: {
    ...mapGetters(["getItems"]),
  },
});
</script>
