import { headers } from "next/headers";

export const checkProtocol = () => {
  return process.env.NODE_ENV === "development" ? "http://" : "https://";
};

export const checkHost = () => {
  return headers().get("host");
};
