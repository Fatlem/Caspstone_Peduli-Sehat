import axios from "axios";

// Base URL untuk API
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

// Membuat instance axios dengan konfigurasi default
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor untuk response
api.interceptors.response.use(
  (response) => {
    // Return the actual data from the response
    return response.data;
  },
  (error) => {
    // Handle error response
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      return Promise.reject({
        success: false,
        error: "Tidak ada respons dari server",
      });
    } else {
      // Something happened in setting up the request that triggered an Error
      return Promise.reject({
        success: false,
        error: "Terjadi kesalahan saat mengirim permintaan",
      });
    }
  }
);

export default api;
