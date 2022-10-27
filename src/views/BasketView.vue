<template>
  <v-container>
    <v-row>
      <v-col>
        <v-app>
          <v-table>
            <tbody>
              <tr v-for="item in getBasket" :key="item.name">
                <td>
                  <img :src="item.img" style="height: 75px; width: 75px" />
                </td>
                <td>{{ item.name }}</td>
                <td>
                  <add-button-group
                    :counterValue="item.quantity"
                    @onAdd="onAdd"
                  />
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
import AddButtonGroup from "@/components/HomePage/AddButtonGroup.vue";
import store from "@/store";
export default defineComponent({
  components: {
    AddButtonGroup,
  },
  data() {
    return {
      //
    };
  },
  methods: {
    onAdd(i: string) {
      if (i === "inc") {
        store.commit("addToCart", this.getBasket);
      } else {
        store.commit("removeFromCart", this.getBasket);
        console.log("basket", this.getBasket);

        console.log("works");
      }
    },
  },
  computed: {
    ...mapGetters(["getBasket"]),
  },
});
</script>
