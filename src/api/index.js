import { handler } from "./handler";

const api = {
  loginAdmin: (body, queryParams) =>
    handler.post("/admin/auth/login", body, { params: queryParams }),
  getCars: (queryParams) =>
    handler.get("/admin/v2/car", { params: queryParams }),
  getCarById: (id, queryParams) =>
    handler.get(`/admin/car/${id}`, { params: queryParams }),
  putCarById: (id, body) => handler.put(`/admin/car/${id}`, body),
};

export default api;