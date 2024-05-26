import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://rentify-real-estate-application.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;