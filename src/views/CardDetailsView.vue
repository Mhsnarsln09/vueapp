<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="d-flex justify-center align-center">{{ data.nickname }}</h1>
        <v-row>
          <v-col class="ma-4">
            <v-img :src="data.img" max-height="65%"></v-img>
          </v-col>
          <v-col> <CardDetailsComponents :data="data" /> </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import DataModels from "@/models/DataModels";
import store from "@/store";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import CardDetailsComponents from "@/components/HomePage/CardDetailsComponents.vue";

export default defineComponent({
  components: {
    CardDetailsComponents,
  },
  data() {
    return {
      data: new DataModels(),
    };
  },
  computed: {
    ...mapGetters(["getPrice"]),
  },
  mounted() {
    this.data = store.getters.getItems.find((x: DataModels) => {
      return x.char_id === Number(this.$route.params.id);
    });
  },
});
</script>
