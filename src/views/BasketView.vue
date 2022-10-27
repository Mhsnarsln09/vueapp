<template>
  <v-container>
    <v-row>
      <v-col>
        <div v-if="total.length === 0">
          <h3>You haven't any items.</h3>
        </div>
        <v-app v-else >
          <v-table >
            <tbody >
              <tr v-for="(item, i) in total" :key="item.name" class="ma-2">
                <td>
                  <img :src="item.img" style="height: 75px; width: 75px" />
                </td>
                <td>{{ item.name }}</td>
                <td>
                  <KeepAlive>
                    <add-button-group :items="item" />
                  </KeepAlive>
                </td>
                <td>Total Price:{{ total[i].quantity * getPrice }}</td>
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

import store from "@/store";
import AddButtonGroup from "@/components/Buttons/AddButtonGroup.vue";
import { mapGetters } from "vuex";

export default defineComponent({
  components: {
    AddButtonGroup,
  },
  data() {
    return {
      //
    };
  },
  computed: {
    ...mapGetters(["getPrice"]),
    total() {
      return store.getters.getBasket;
    },
  },
});
</script>
