import { create } from "zustand";

const useAuthStore = create((set) => ({
  authStore: JSON.parse(localStorage.getItem("auth-mystore")) || null,
  loginSetAuthStore: (storeData) => {
    localStorage.setItem("auth-mystore", JSON.stringify(storeData));
    set({ authStore: storeData });
  },
  logoutSetAuthStore: () => {
    localStorage.removeItem("auth-mystore");
    set({ authStore: null });
  },
}));

export default useAuthStore;
