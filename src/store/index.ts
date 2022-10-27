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
    getBasket(state) {
      return state.basket;
    },
  },
  mutations: {
    setItems(state, payload) {
      state.items = payload;
    },
    setPrice(state, payload) {
      state.price = payload;
    },
    addToCart(state, payload) {
      const data = state.basket.find((i) => i.char_id === payload.char_id);

      if (data) {
        data.quantity++;
      } else {
        state.basket.push({ ...payload, quantity: 1 });
      }
    },
    removeFromCart(state, payload) {
      const data = state.basket.find((i) => i.char_id === payload.char_id);
      console.log("payload", payload.char_id);

      if (data) {
        if (data.quantity > 1) {
          data.quantity--;
          console.log("payload_data", payload.char_id);
        } else {
          state.basket = state.basket.filter(
            (i) => i.char_id !== payload.char_id
          );
        }
      }
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
