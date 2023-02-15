export const calendarModule = {
  state: () => ({
    selectedDate: new Date(),
  }),

  getters: {
    selectedDate: (state) => {
      return state.selectedDate;
    },
  },

  mutations: {
    setSelectedDate(state, date) {
      state.selectedDate = date;
    },
  },

  actions: {
    setSelectedDate({ commit }, date) {
      commit("setSelectedDate", date);
    },
  },

  namespaced: true,
};
