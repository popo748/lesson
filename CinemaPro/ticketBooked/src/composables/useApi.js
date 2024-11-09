import axios from "axios";

export const useApi = (apiUrl = "http://127.0.0.1:8000") => {
  const instance = axios.create({
    baseURL: apiUrl,
  });

  return instance;
};

const api = useApi();

export const getMovies = () => api.get('/movies/all');

export const getTheaters = () => api.get('/cinemas/all');
export const getShowdates = (movieId) => api.get(`/movies/${movieId}/showings`);