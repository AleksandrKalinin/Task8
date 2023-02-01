import { createStore } from "vuex";
import { modalModule } from "@/store/modalModule";
import { calendarModule } from "@/store/calendarModule";
import { databaseModule } from "@/store/databaseModule";
//import router from "@/router";

export default createStore({
  state: {
    itemsLength: 10,
    onlyPendingItems: false,
    selectedFilter: "All",
    itemsSortValue: "default",
    sortOrder: false,
    currentItem: null,
  },

  getters: {
    currentItem: (state) => {
      return state.currentItem;
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

    pendingItems(state, getters, rootGetters) {
      let items = JSON.parse(JSON.stringify(rootGetters.database.items));
      if (state.onlyPendingItems) {
        return items.filter((item) => item.completed !== true);
      } else {
        return items;
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
        return [...getters.pendingItems];
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

    filteredItemsByDate(state, getters, rootGetters) {
      let date = rootGetters.calendar.selectedDate;
      if (date === null) {
        return [...getters.filteredAndSortedItems];
      } else {
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        return [
          ...getters.filteredAndSortedItems.filter((item) => {
            let currentDate;
            if (Object.prototype.hasOwnProperty.call(item?.date, "seconds")) {
              currentDate = new Date(item.date.seconds * 1000);
            } else {
              currentDate = item.date;
            }
            return (
              currentDate.getDate() === day &&
              currentDate.getMonth() === month &&
              currentDate.getFullYear() === year
            );
          }),
        ];
      }
    },
  },

  mutations: {
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

    setCurrentItem(state, item) {
      state.currentItem = item;
    },

    changeStatus(state, id) {
      console.log(id);
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
            commit("updateOriginalItems", data);
          });
      } catch (e) {
        console.log(e);
      }
    },

    startEditing({ commit, rootGetters }, id) {
      let items;
      if (rootGetters["database/areItemsLoaded"]) {
        items = JSON.parse(JSON.stringify(rootGetters["database/items"]));
        let index = items.map((item) => item.id.toString()).indexOf(id);
        let item = items[index];
        commit("setCurrentItem", item);
      }
    },

    filterItems({ commit }, value) {
      commit("filterItems", value);
    },

    selectPending({ commit }) {
      commit("selectPending");
    },

    updateSortOrder({ commit }) {
      commit("updateSortOrder");
    },

    updateSortValue({ commit }, value) {
      commit("updateSortValue", value);
    },

    stopEditing({ commit }) {
      commit("setCurrentItem", null);
    },
  },

  modules: {
    modal: modalModule,
    calendar: calendarModule,
    database: databaseModule,
  },
});
