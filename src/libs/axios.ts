import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://",
});

axiosClient.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject({
      error: error.response,
    });
  }
);
