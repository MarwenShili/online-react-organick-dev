import axios from "axios";
let url = process.env.REACT_APP_API_URL;

let headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const axiosInstance = axios.create({
  baseURL: url,
  headers,
});

export default axiosInstance;
