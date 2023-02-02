import { createStore } from "vuex";
import { modalModule } from "@/store/modalModule";

export default createStore({
  state: {
    items: [],
    areItemsLoaded: false,
    itemsLength: 10,
    onlyPendingItems: false,
    selectedFilter: "All",
    itemsSortValue: "default",
    sortOrder: false,
    currentItem: null,
  },

  getters: {
    items: (state) => {
      return state.items;
    },

    currentItem: (state) => {
      return state.currentItem;
    },

    areItemsLoaded: (state) => {
      return state.areItemsLoaded;
    },

    itemsLength: (state) => {
      return state.itemsLength;
    },

    itemsSortValue: (state) => {
      return state.itemsSortValue;
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

    filteredAndSortedItems(state, getters) {
      let val = state.itemsSortValue;
      if (val === "default") {
        return [...getters.filteredItems];
      } else if (state.sortOrder) {
        return [
          ...getters.filteredItems.sort((a, b) => a[val].localeCompare(b[val])),
        ];
      } else {
        return [
          ...getters.filteredItems.sort((a, b) => b[val].localeCompare(a[val])),
        ];
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

    updateSortOrder(state) {
      state.sortOrder = !state.sortOrder;
    },

    selectPending(state) {
      state.onlyPendingItems = !state.onlyPendingItems;
    },

    filterItems(state, value) {
      state.selectedFilter = value;
    },

    updateSortValue(state, value) {
      state.itemsSortValue = value;
    },

    deleteItem(state, id) {
      let index = state.items.map((item) => item.id).indexOf(id);
      state.items.splice(index, 1);
    },

    addItem(state, item) {
      state.items.unshift(item);
    },

    editItem(state, value) {
      let index = state.items.map((item) => item.id).indexOf(value.id);
      state.items[index] = value;
    },

    setCurrentItem(state, id) {
      let index = state.items.map((item) => item.id).indexOf(id);
      state.currentItem = state.items[index];
    },

    changeStatus(state, id) {
      let index = state.items.map((item) => item.id).indexOf(id);
      state.items[index].completed = !state.items[index].completed;
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

    filterItems({ commit }, value) {
      commit("filterItems", value);
    },

    changeStatus({ commit }, id) {
      commit("changeStatus", id);
    },

    deleteItem({ commit }, id) {
      commit("deleteItem", id);
    },

    setCurrentItem({ commit }, id) {
      commit("setCurrentItem", id);
      commit("modal/toggleModal");
    },

    updateSortValue({ commit }, value) {
      commit("updateSortValue", value);
    },

    updateSortOrder({ commit }) {
      commit("updateSortOrder");
    },

    selectPending({ commit }) {
      commit("selectPending");
    },

    editItem({ commit }, item) {
      commit("editItem", item);
    },

    addItem({ commit }, item) {
      commit("addItem", item);
    },
  },

  modules: {
    modal: modalModule,
  },
});
