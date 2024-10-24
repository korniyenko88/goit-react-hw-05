import axios from 'axios';

const key =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWZkNjJmMDY2YjMyODMwYmFlNzljZDkzMWI0ZjUxNCIsIm5iZiI6MTcyOTcxMzQ2MC4yNjA3MTQsInN1YiI6IjY3MTk1MjllNmQ2YjcwNWRjODcxMjAyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AmYYhSXEwZ8dEKfrtwWtzyMfXcHnaWKSfCbPYPYkUDw';

const movies = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    include_adult: false,
    language: 'en-US',
  },
  headers: {
    accept: 'application/json',
    Authorization: key,
  },
});

export const fetchTrendingMovies = async page => {
  const response = await movies.get(`/trending/movie/day?page=${page}`);
  const data = response.data;
  return data;
};

export const fetchMoviesId = async id => {
    const response = await movies.get(`/movie/${id}`);
    const data = response.data;
    return data;
  };
  export const fetchMoviesSearch = async (q, page) => {
    const response = await movies.get(
      `/search/movie?query=${q}&page=${page}`
    );
    const data = response.data;
    return data;
  };
  export const fetchMoviesCredits = async id => {
    const response = await movies.get(`/movie/${id}/credits`);
    const data = response.data;
    return data;
  };
  export const fetchMoviesReviews = async id => {
    const response = await movies.get(`/movie/${id}/reviews`);
    const data = response.data;
    return data;
  };