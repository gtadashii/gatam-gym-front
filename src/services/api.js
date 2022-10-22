import axios from "axios";

const api = axios.create({
  baseURL: "https://sjsvo656s5.execute-api.us-east-1.amazonaws.com/",
});

export default api;
