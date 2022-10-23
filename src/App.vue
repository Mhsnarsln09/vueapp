<template>
  <v-app>
    <header-lay/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderLay from "@/components/layout/HeaderComponents.vue"

export default defineComponent({
  name: 'App',

  data () {
    return {
      //
    }
  },
  components:{
    HeaderLay
  }
})
</script>
