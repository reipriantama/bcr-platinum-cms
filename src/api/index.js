import { handler } from "./handler";

const api = {
  loginAdmin: (body, queryParams) =>
    handler.post("/admin/auth/login", body, { params: queryParams }),
  getCars: (queryParams) =>
    handler.get("/admin/v2/car", { params: queryParams }),
  getCarById: (id, queryParams) =>
    handler.get(`/admin/car/${id}`, { params: queryParams }),
  addNewCar: (body) => handler.post("/admin/car", body),
  putCarById: (id, body) => handler.put(`/admin/car/${id}`, body),
  deleteCarById: (id) => handler.delete(`/admin/car/${id}`),
  getReports: (queryParams) =>
    handler.get("/admin/order/reports", { params: queryParams }),
  getOrder: (queryParams) =>
    handler.get("/admin/v2/order", { params: queryParams }),
};

export default api;
