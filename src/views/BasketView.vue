<template>
  <v-container>
    <v-row>
      <v-col>
        <v-app>
          <v-table>
            <tbody>
              <tr v-for="item in getItems.splice(0,1)" :key="item.name">
                <td>
                  <img :src="item.img" style="height: 75px; width: 75px" />
                </td>
                <td>{{ item.name }}</td>
                <td>
                  <add-button-group/>
                </td>
                <td>{{ item.nickname }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-app>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import store from "@/store";
import AddButtonGroup from "@/components/HomePage/AddButtonGroup.vue"
export default defineComponent({
  components:{
    AddButtonGroup
  },
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
