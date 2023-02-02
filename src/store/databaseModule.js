import { db } from "@/database/index";
import {
  doc,
  setDoc,
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  getDoc,
  query,
  where,
  Timestamp,
} from "firebase/firestore";

//import { todos } from "./todos";

export const databaseModule = {
  state: () => ({
    items: [],
    areItemsLoaded: false,
  }),

  getters: {
    items: (state) => {
      return state.items;
    },

    areItemsLoaded: (state) => {
      return state.areItemsLoaded;
    },
  },

  mutations: {
    updateItems(state, value) {
      state.items = value;
    },

    itemsLoaded(state) {
      state.areItemsLoaded = true;
    },

    addItem(state, value) {
      console.log(state);
      console.log(value);
    },

    updateItem(state, value) {
      let index = state.items.map((item) => item.id).indexOf(value.id);
      state.items[index] = value;
    },

    deleteItem(state, id) {
      let index = state.items.map((item) => item.id).indexOf(id);
      state.items.splice(index, 1);
    },

    changeStatus(state, value) {
      let index = state.items.map((item) => item.id).indexOf(value.id);
      state.items[index].completed = !state.items[index].completed;
    },
  },

  actions: {
    async addToDatabase({ commit }, item) {
      try {
        await setDoc(doc(db, "todos", item.id), item);
        commit("addItem");
      } catch (e) {
        console.log(e);
      }
    },

    async deleteFromDatabase({ commit }, id) {
      try {
        await deleteDoc(doc(db, "todos", id.toString()));
        commit("deleteItem", id);
      } catch (e) {
        console.log(e);
      }
    },

    async editFromDatabase({ commit }, item) {
      try {
        const docRef = doc(db, "todos", item.id.toString());
        await updateDoc(docRef, item);
        const docSnap = await getDoc(docRef);
        commit("updateItem", docSnap.data());
      } catch (e) {
        console.log(e);
      }
    },

    async changeStatusInDatabase({ commit }, item) {
      try {
        const docRef = doc(db, "todos", item.id.toString());
        item.completed = !item.completed;
        await updateDoc(docRef, item);
        const docSnap = await getDoc(docRef);
        commit("changeStatus", docSnap.data());
      } catch (e) {
        console.log(e);
      }
    },

    async getFromDatabase({ commit }, payload) {
      const array = [];
      try {
        const startTime = Timestamp.fromDate(payload.startDate);
        const endTime = Timestamp.fromDate(payload.endDate);
        const todosRef = collection(db, "todos");
        const todosQuery = query(
          todosRef,
          where("date", ">=", startTime),
          where("date", "<", endTime)
        );
        const querySnapshot = await getDocs(todosQuery);
        if (querySnapshot) {
          querySnapshot.forEach((doc) => {
            array.push(doc.data());
          });
          commit("updateItems", array);
        } else {
          console.log("No such document!");
        }
        commit("itemsLoaded", true);
      } catch (e) {
        console.log(e);
      }
    },

    //function for pushing todos from todos.js into database
    /*async pushIntoDatabase() {
      for (var i = 0; i < todos.length; i++) {
        let newDate = Timestamp.fromDate(new Date(todos[i].date));
        todos[i].date = newDate;
        try {
          await setDoc(doc(db, "todos", todos[i].id.toString()), todos[i]);
        } catch (e) {
          console.log(e);
        }
      }
    },*/
  },

  namespaced: true,
};
