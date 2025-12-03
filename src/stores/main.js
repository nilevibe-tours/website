import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    current: "en",
  }),

  actions: {
    toggleLang() {
      this.current = this.current === "en" ? "ar" : "en";
    },
  },
});
