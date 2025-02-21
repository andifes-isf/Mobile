import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

const api = axios.create({
  baseURL: "http://10.0.2.2:8800", // URL of your backend
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor to add the token in the header
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token"); // Use AsyncStorage to get the token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
