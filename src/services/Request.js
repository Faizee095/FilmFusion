import axios from "axios";

const key = '1046af522affede586d61344e4e71a40';
const id = localStorage.getItem('movieId');
console.log(id)

export const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestSimilar: `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${key}&language=en-US`,
  };

  export const getPopularFilms = async () => {
    const response = await  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`);
    return response;
  }

  export const getTopRatedFilms = async () => {
    const response = await  axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`);
    return response;
  }
  export const getTrendingFilms = async () => {
    const response = await  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`);
    return response;
  }
  export const getHorrorFilms = async () => {
    const response = await  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`);
    return response;
  }
  export const getUpcomingFilms = async () => {
    const response = await  axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`);
    return response;
  }

  export const getFilmDetails = async (movie_id) => {
    const response = await  axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${key}&language=en-US`);
    return response.data
  }
