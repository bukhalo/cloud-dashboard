import axios from "axios";
import progressBar from "@/plugins/progressBar";
import Cookies from "js-cookie";

const billing = axios.create({
  baseURL: "https://api.cloud.robotmafia.io/billing",
  params: {
    auth: Cookies.get("sid")
  }
});

billing.interceptors.request.use(config => {
  // progressBar.start();
  return config;
});

billing.interceptors.response.use(response => {
  // progressBar.done();
  return response;
});

export default billing;
