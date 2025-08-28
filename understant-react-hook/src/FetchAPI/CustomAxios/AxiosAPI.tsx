import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    Authorization: "Bearer <TOKEN>",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    console.log("👉 Starting Request ->", config);

    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.error("👉 Request Error ->", error);
    return Promise.reject(error); // ส่ง error กลับไปให้ .catch() เช่น get url ผิด
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("👉 Receive Response ->", response);
    return response;
  },
  (error: AxiosError) => {
    console.error("👉 Response Error ->", error);
    if (error.response && error.response.status === 401) {
      console.log("Unauthorized, logging out...");
      localStorage.removeItem("token"); // ลบ token เก่า
      window.location.href = "/login"; // ไปหน้า login
    }
    if (error.response && error.response.status === 500) {
      console.log("Internal Server Error");
    }
    return Promise.reject(error); // ส่ง error กลับไปให้ .catch() ถ้า status !== 200
  }
);

export default api;
