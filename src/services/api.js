import axios from "axios";

const api = axios.create({
  baseURL: "https://ajlgff9h51.execute-api.us-east-1.amazonaws.com/dev",
});

export default api;
