import api from "./module/api";

export const userApi = {
  createUser: (data) => api.post("/api/users", data),
};
