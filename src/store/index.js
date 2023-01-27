import { createStore } from "vuex";
import { modalModule } from "@/store/modalModule";
import { calendarModule } from "@/store/calendarModule";
import { databaseModule } from "@/store/databaseModule";

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
      //console.log("todos", todos);
      //console.log("spreaded", [...items]);
      if (state.onlyPendingItems) {
        return items.filter((item) => item.completed !== true);
      } else {
        return items;
      }
    },

    filteredItems(state, getters) {
      //console.log("getters", getters.pendingItems);
      if (state.selectedFilter !== "All") {
        return [
          getters.pendingItems.filter(
            (item) => item.category === state.selectedFilter
          ),
        ];
      } else {
        //console.log([...getters.pendingItems]);
        return getters.pendingItems;
      }
    },

    filteredAndSortedItems(state, getters) {
      let val = state.itemsSortValue;
      if (val === "default") {
        return [...getters.filteredItems];
      } else if (state.sortOrder) {
        return [
          getters.filteredItems.sort((a, b) => a[val].localeCompare(b[val])),
        ];
      } else {
        return [
          getters.filteredItems.sort((a, b) => b[val].localeCompare(a[val])),
        ];
      }
    },

    filteredItemsByDate(state, getters, rootGetters) {
      //console.log("filt", getters.filteredAndSortedItems);
      let date = rootGetters.calendar.selectedDate;
      if (date === null) {
        return getters.filteredAndSortedItems;
      } else {
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        return [
          ...getters.filteredAndSortedItems.filter((item) => {
            let currentDate = new Date(item.date);
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
            commit("updateOriginalItems", data);
          });
        //.then(() => commit("itemsLoaded"));
      } catch (e) {
        console.log(e);
      }
    },
  },

  modules: {
    modal: modalModule,
    calendar: calendarModule,
    database: databaseModule,
  },
});
