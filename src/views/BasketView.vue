<template>
  <v-container>
    <v-row>
      <v-col>
        <v-app>
          <v-table>
            <tbody>
              <tr v-for="(item, i) in total" :key="item.name">
                <td>
                  <img :src="item.img" style="height: 75px; width: 75px" />
                </td>
                <td>{{ item.name }}</td>
                <td>
                  <KeepAlive>
                    <add-button-group :items="item" />
                  </KeepAlive>
                </td>
                <td style="border: 1px solid red">
                  {{ total[i].quantity * total[i].quantity }}
                </td>
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
    total() {
      return store.getters.getBasket;
    },
  },
});
</script>
