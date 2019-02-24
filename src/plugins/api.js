import axios from "axios";
import progressBar from "@/plugins/progressBar";

const api = axios.create({
  baseURL: "http://localhost:5000"
});

api.interceptors.request.use(config => {
  progressBar.start();
  return config;
});

api.interceptors.response.use(response => {
  progressBar.done();
  return response;
});

export default api;
