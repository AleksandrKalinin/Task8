import { createStore } from "vuex";

export default createStore({
  state: {
    items: [],
    areItemsLoaded: false,
    itemsLength: 10,
  },
  getters: {
    items: (state) => {
      return state.items;
    },

    areItemsLoaded: (state) => {
      return state.areItemsLoaded;
    },

    itemsLength: (state) => {
      return state.itemsLength;
    },
  },
  mutations: {
    updateItems(state, items) {
      state.items = items;
    },

    itemsLoaded(state) {
      state.areItemsLoaded = true;
    },

    updateItemsLength(state, value) {
      state.itemsLength = value;
    },
  },
  actions: {
    async loadItems({ commit }) {
      try {
        await fetch("./todos.json")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            commit("updateItems", data);
          })
          .then(() => commit("itemsLoaded"));
      } catch (e) {
        console.log(e);
      }
    },
  },
  modules: {},
});
