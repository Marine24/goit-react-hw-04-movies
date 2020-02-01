import axios from 'axios';

const key = 'b1648042610c64f00a2ab552825d5d65';
const BasicURL = 'https://api.themoviedb.org/3';

export const getMovies = () =>
  axios.get(`${BasicURL}/trending/movie/week?api_key=${key}`);

export const searchMovie = query =>
  axios.get(`${BasicURL}/search/movie?api_key=${key}&query=${query}`);

export const getOneMovie = id =>
  axios.get(`${BasicURL}/movie/${id}?api_key=${key}`);

export const getCast = id =>
  axios.get(`${BasicURL}/movie/${id}/credits?api_key=${key}`);

export const getReview = id =>
  axios.get(
    `${BasicURL}/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`,
  );
