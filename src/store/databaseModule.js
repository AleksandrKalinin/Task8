import { db } from "@/database/index";
import {
  doc,
  setDoc,
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

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

    addToDatabase(state, value) {
      console.log(value);
    },
  },

  actions: {
    async addToDatabase({ commit }, item) {
      try {
        await setDoc(doc(db, "todos", item.id), item);
        commit("addToDatabase");
      } catch (e) {
        console.log(e);
      }
    },
    async deleteFromDatabase({ commit }, id) {
      try {
        await deleteDoc(doc(db, "todos", id.toString()));
        console.log(commit);
      } catch (e) {
        console.log(e);
      }
    },
    async editFromDatabase({ commit }, item) {
      try {
        const docRef = doc(db, "todos", item.id.toString());
        await updateDoc(docRef, item);
        console.log(commit);
      } catch (e) {
        console.log(e);
      }
    },
    async getFromDatabase({ commit }) {
      try {
        const todosRef = collection(db, "todos");
        const docSnap = await getDocs(todosRef);
        const array = [];
        if (docSnap) {
          docSnap.forEach((doc) => {
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
    async loopOverDatabase() {
      let todos = [];
      for (var i = 0; i < todos.length; i++) {
        try {
          await setDoc(doc(db, "todos", todos[i].id.toString()), todos[i]);
        } catch (e) {
          console.log(e);
        }
      }
    },
  },

  namespaced: true,
};
