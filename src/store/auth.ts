import { defineStore } from 'pinia'; // <-- Add this line

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false, // Default to not logged in
    data: null, // Holds data information, null by default
    token: null,
    participants: [],
  }),
  actions: {
    login(userData, token) {
      this.isLoggedIn = true;
      this.data = userData; // Set the data data when logging in
      this.token = token;
      this.participants = userData.participants;
    },
    logout() {
      this.isLoggedIn = false;
      this.data = null; // Clear the data data when logging out
      this.token = null;
      this.participants = [];
    },
  },
  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: ["logged", "role", "user", "token", "participants"] }]
  }
});