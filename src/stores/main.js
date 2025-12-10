import { defineStore } from "pinia";

const useMainStore = defineStore("main", {
  state: () => ({
    destination: null,
  }),

  actions: {
    updateDestination(newDestination) {
      this.destination = newDestination;
    },
  },
});

export default useMainStore;
