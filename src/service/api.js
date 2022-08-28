import axios from "axios";

const api = axios.create({
  baseURL: "https://fn212q12q7.execute-api.us-east-1.amazonaws.com",
});

export default api;
