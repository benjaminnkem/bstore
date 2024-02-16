import axios from "axios";
// import "dotenv/config";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const publicApi = axios.create({
  baseURL: `${BASE_URL}/api`,
});

// publicApi.interceptors.request.use(async (config) => {
//   console.log(process.env);
//   return config;
// });
