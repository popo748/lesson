import axios, { AxiosInstance } from "axios";

export const useApi = (apiUrl = "http://127.0.0.1:8000"): AxiosInstance => {
  const instance = axios.create({
    baseURL: apiUrl,
  });

  return instance;
};