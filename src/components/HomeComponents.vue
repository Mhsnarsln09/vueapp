<template>
  <v-container >
    <v-row >
     <v-col >
             <v-card class="mx-auto" max-width="344" height="300px">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            cover
          ></v-img>

          <v-card-title> Top western road trips </v-card-title>

          <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
        </v-card>
     </v-col>
    </v-row>
  </v-container>
  <router-view></router-view>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({});
</script>