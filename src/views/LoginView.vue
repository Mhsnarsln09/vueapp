<template>
  <login-components />
</template>

<script>
import { defineComponent } from "vue";
import LoginComponents from "@/components/LoginPage/LoginComponents.vue";
export default defineComponent({
  components: {
    LoginComponents,
  },
});
</script>
