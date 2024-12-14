import { create } from "zustand";

const useAuthJWTStore = create((set) => ({
  authJWT: JSON.parse(localStorage.getItem("auth-mystore-jwt")) || null,
  loginSetAuthJWT: (jwtData) => {
    localStorage.setItem("auth-mystore-jwt", JSON.stringify(jwtData));
    set({ authJWT: jwtData });
  },
  logoutSetAuthJWT: () => {
    localStorage.removeItem("auth-mystore-jwt");
    set({ authJWT: null });
  },
}));

export default useAuthJWTStore;
