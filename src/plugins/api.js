import axios from "axios";
import progressBar from "@/plugins/progressBar";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "https://api.cloud.robotmafia.io",
  withCredentials: true
});

api.interceptors.request.use(config => {
  // progressBar.start();
  return config;
});

api.interceptors.response.use(response => {
  // progressBar.done();
  return response;
});

export default api;
