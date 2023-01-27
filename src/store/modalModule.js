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

  namespaced: true,
};
