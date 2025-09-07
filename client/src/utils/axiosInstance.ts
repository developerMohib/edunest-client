import config from "@/lib/config";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});
export default instance;

const API_BASE_URL = config.nextPublicApiUrl || "http://localhost:5000/api";

// Create axios instance
export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Redirect to login on authentication error
      if (typeof window !== "undefined") {
        window.location.href = "/signin";
      }
    }
    return Promise.reject(error);
  }
);
