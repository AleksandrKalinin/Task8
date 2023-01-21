import { createStore } from "vuex";

export default createStore({
  state: {
    items: [],
    areItemsLoaded: false,
    itemsLength: 10,
    onlyPendingItems: false,
    selectedFilter: "All",
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

    onlyPendingItems: (state) => {
      return state.onlyPendingItems;
    },

    pendingItems(state, getters) {
      if (state.onlyPendingItems) {
        return [...getters.items.filter((item) => item.completed !== true)];
      } else {
        return getters.items;
      }
    },

    filteredItems(state, getters) {
      if (state.selectedFilter !== "All") {
        return [
          ...getters.pendingItems.filter(
            (item) => item.category === state.selectedFilter
          ),
        ];
      } else {
        return getters.pendingItems;
      }
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

    selectPending(state) {
      state.onlyPendingItems = !state.onlyPendingItems;
    },

    filterItems(state, value) {
      state.selectedFilter = value;
    },
  },
  actions: {
    async loadItems({ commit }) {
      try {
        await fetch("./todos.json")
          .then((response) => response.json())
          .then((data) => {
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
