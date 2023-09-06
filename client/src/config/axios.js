import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8383/api",
  withCredentials: true,
});

export default instance;
