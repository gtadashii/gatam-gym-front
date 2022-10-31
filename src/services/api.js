import axios from "axios";

const api = axios.create({
  baseURL: "https://t65s1u7sif.execute-api.us-east-1.amazonaws.com/dev/",
});

export default api;
