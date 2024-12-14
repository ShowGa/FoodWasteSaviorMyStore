import { create } from "zustand";

const useAuthJWTStore = create((set) => ({
  authJWT: JSON.parse(localStorage.getItem("auth-jwt")) || null,
  loginSetAuthJWT: (jwtData) => {
    localStorage.setItem("auth-jwt", JSON.stringify(jwtData));
    set({ authJWT: jwtData });
  },
  logoutSetAuthJWT: () => {
    localStorage.removeItem("auth-jwt");
    set({ authJWT: null });
  },
}));

export default useAuthJWTStore;
