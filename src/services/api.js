import axios from "axios";

const api = axios.create({
  baseURL: "https://7g5fxxelh9.execute-api.us-east-1.amazonaws.com",
});

export default api;
