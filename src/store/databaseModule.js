import { db } from "@/database/index";
import { doc, setDoc, getDoc } from "firebase/firestore";

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
  },

  actions: {
    async addToDatabase() {
      try {
        console.log("ffff");
      } catch (e) {
        console.log(e);
      }
    },
    async deleteFromDatabase() {
      try {
        console.log("ffff");
      } catch (e) {
        console.log(e);
      }
    },
    async getFromDatabase({ commit }) {
      try {
        const docRef = doc(db, "vue-todolist", "todos");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          let data = docSnap.data();
          let array = [];
          Object.keys(data).forEach((key) => {
            array.push(data[key]);
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
      const arrayToObject = (array) =>
        array.reduce((obj, item) => {
          obj[item.id] = item;
          return obj;
        }, {});
      const todosObject = arrayToObject([]);
      try {
        await setDoc(doc(db, "vue-todolist", "todos"), todosObject);
      } catch (e) {
        console.log(e);
      }
    },
  },

  namespaced: true,
};
