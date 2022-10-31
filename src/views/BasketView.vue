<template>
  <v-container>
    <v-row>
      <v-col>
        <div v-if="getBasket.length === 0">
          <h3>You haven't any items.</h3>
        </div>
        <v-app v-else style="z-index:0 !important;">
          <v-table  >
            <tbody >
              <tr v-for="(item, i) in getBasket" :key="item.name" class="ma-2">
                <td>
                  <img :src="item.img" style="height: 75px; width: 75px" />
                </td>
                <td>{{ item.name }}</td>
                <td>
                  <KeepAlive>
                    <add-button-group :items="item" />
                  </KeepAlive>
                </td>
                <td>Price: {{ getBasket[i].quantity * getPrice }} TL</td>
              </tr>
            
            </tbody>
           
          </v-table>
          <div class="d-flex justify-end text-left mr-16">
            <h4 >Total Price: {{totalPrice}} TL</h4>
          </div>
        </v-app>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AddButtonGroup from "@/components/Buttons/AddButtonGroup.vue";
import { mapGetters } from "vuex";
import store from "@/store";
import DataModels from "@/models/DataModels";

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
   ...mapGetters(["getBasket"]),
   totalPrice(){
      let price = 0
     store.getters.getBasket.forEach((x:DataModels)  =>{
      price += x.quantity * store.getters.getPrice       
      })
      return price
    }

   
  },
  methods:{
   
  }
 
});
</script>
