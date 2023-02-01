import router from "@/router";

export const modalModule = {
  state: () => ({
    isModalOpen: false,
  }),

  getters: {
    isModalOpen: (state) => {
      return state.isModalOpen;
    },
  },

  mutations: {
    toggleModal(state) {
      state.isModalOpen = !state.isModalOpen;
    },
  },

  actions: {
    toggleModal({ commit }) {
      commit("toggleModal");
    },

    closeModal() {
      router.push("/");
    },
  },

  namespaced: true,
};
