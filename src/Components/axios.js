import { baseUrl } from "./constants";
import axios from "axios";
const instance = axios.create({
    baseURL: baseUrl,
  });

export default instance;