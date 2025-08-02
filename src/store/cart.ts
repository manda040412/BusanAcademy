import axios from 'axios';
import { defineStore } from 'pinia';
import { showToast } from '../plugins/acsys';

export const useCartStore = defineStore('cart', {
  state: () => ({
    total_items: 0, // Default to not logged in
  }),
  actions: {
    setTotalItems(total_items) {
      this.total_items = total_items;
    },
    async getTotalItems() {
      try {
        const { data } = await axios.get("user/total-item-keranjang");
        this.total_items = data;
      } catch (error) {
        showToast("Gagal mengambil data keranjang", "error");
      }
    }
  },
  persist: {
      enabled: true,
      strategies: [{ storage: localStorage, paths: ["total_items"] }]
  }
});
