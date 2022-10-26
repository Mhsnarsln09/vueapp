import { createStore } from "vuex";
import axios, { AxiosResponse } from "axios";
import DataModels from "@/models/DataModels";

export default createStore({
  state: {
    user: [
      {
        email: "test@test.com",
        password: 12345,
      },
    ],
    isAuth: false,
    items: [],
    basket: [] as Array<DataModels>,
    price: Number,
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getAuthInfo(state) {
      return state.isAuth;
    },
    getItems(state) {
      return state.items;
    },
    getPrice(state) {
      return state.price;
    },
  },
  mutations: {
    setItems(state, payload) {
      state.items = payload;
    },
    setToBasket(state, payload) {
      state.basket.push(payload);
    },
    setPrice(state, payload) {
      state.price = payload;
    },
  },
  actions: {
    setItems(context) {
      axios
        .get("https://www.breakingbadapi.com/api/characters")
        .then((items: AxiosResponse<Array<DataModels>>) => {
          const data = items.data.slice(0, 10);

          context.commit("setItems", data);
        });
    },
    setPrice(context, price) {
      context.commit("setPrice", price);
    },
  },
});
