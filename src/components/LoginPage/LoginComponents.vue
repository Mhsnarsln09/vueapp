<template>
  <v-container class="d-flex align-center" style="height: 100%">
    <v-row class="d-flex justify-center align-center">
      <v-col cols="6">
        <v-card>
          <v-card-title>Giriş Yap</v-card-title>
          <v-form ref="form" lazy-validation @submit.prevent="onLogin">
            <v-row>
              <v-col>
                <v-row class="ma-1">
                  <v-col>
                    <v-text-field
                      v-model="email"
                      hide-details
                      density="compact"
                      variant="outlined"
                      label="E-mail"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="ma-1">
                  <v-col>
                    <v-text-field
                      v-model.number="password"
                      hide-details
                      density="compact"
                      variant="outlined"
                      type="password"
                      label="Password"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row class="pa-3">
              <v-spacer> </v-spacer>
              <v-col cols="3">
                <v-btn type="submit" color="success"> Login </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import store from "@/store";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",

  data() {
    return {
      email: "",
      password: 0,
    };
  },

  methods: {
    onLogin() {
      if (
        store.getters.getUser[0].email === this.email &&
        store.getters.getUser[0].password === this.password
      ) {
        store.state.isAuth = true;
        this.$router.push("/");
      } else {
        alert("Email and/or password are wrong !!!");
      }
    },
  },
  computed: {},
});
</script>
