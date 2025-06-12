import axios from "axios";

// Konfigurasi dasar axios
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://backend.pedulisehatmu.my.id";

// Membuat instance axios dengan konfigurasi default
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Enable sending cookies
});

// Interceptor untuk request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor untuk response
api.interceptors.response.use(
  (response) => {
    // Proses response sebelum dikembalikan ke pengguna
    return response.data;
  },
  (error) => {
    // Tangani error response
    if (error.response) {
      // Error dari server dengan status code
      console.error("Error response:", error.response.data);

      // Handle unauthorized error (401)
      if (error.response.status === 401) {
        // Redirect to login if needed
        window.location.href = "/login";
      }

      return Promise.reject(error.response.data);
    } else if (error.request) {
      // Error karena tidak ada response
      console.error("Error request:", error.request);
      return Promise.reject({ message: "Tidak dapat terhubung ke server" });
    } else {
      // Error lainnya
      console.error("Error:", error.message);
      return Promise.reject({ message: error.message });
    }
  }
);

export default api;
