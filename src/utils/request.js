import axios from "axios";
const devMode = process.env.NODE_ENV === "development";

const instance = axios.create({
  baseURL: devMode ? "http://localhost:5000" : ""
});

export const get = props =>
  instance({
    method: "get",
    ...props
  });
