import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : "";
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { token, count, doubleCount, increment };
});
