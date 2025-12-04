import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    current: "en",
    selectedPackage: null,
  }),

  actions: {
    toggleLang() {
      this.current = this.current === "en" ? "ar" : "en";
    },
    setPackage(pkg) {
      console.log(pkg);
      this.selectedPackage = pkg;
    },
  },
});
