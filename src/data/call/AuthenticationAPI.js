import axiosInstance from "../static/axiosInstance";

export const AuthenticationAPI = {
  login: ({ username, password }) =>
    axiosInstance.post(`/login`, { username, password }),

  logout: () => axiosInstance.post("/logout"),

  registerCookie: () => axiosInstance.get(`/sanctum/csrf-cookie`),
};

export default AuthenticationAPI;
