import axios from "axios";

const API = axios.create({
  baseURL: "https://resumeiq-ai-enpz.onrender.com",
});

export default API;