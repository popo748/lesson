import axios, { AxiosInstance } from "axios";

export const useApi = (apiUrl = "http://127.0.0.1:8000"): AxiosInstance => {
  const instance = axios.create({
    baseURL: apiUrl,
  });

  return instance;
};

const api = useApi();


// Fetch cinemas showing a specific movie by ID
export const getMovieCinemas = (movie_id: number) => api.get(`/movies/${movie_id}/cinemas`);