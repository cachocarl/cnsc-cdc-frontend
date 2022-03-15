import axiosInstance from "../static/axiosInstance";

export const AuthenticationAPI = {
  login: ({ user_code, password }) =>
    axiosInstance.post(`/login`, { user_code, password }),

  logout: () => axiosInstance.post("/logout"),

  registerCookie: () => axiosInstance.get(`/sanctum/csrf-cookie`),
};

export default AuthenticationAPI;