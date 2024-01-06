import axios from "axios";

export const publicApi = axios.create({
  baseURL: process.env.BASE_URL ?? "",
});

publicApi.defaults.headers.common["Content-Type"] = "application/json";
