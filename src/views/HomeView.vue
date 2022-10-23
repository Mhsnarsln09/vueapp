<template>
 <home-components/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import HomeComponents from "@/components/HomeComponents.vue"

export default defineComponent({
  name: 'HomeView',

  components: {
    HomeComponents
  },
});
</script>
