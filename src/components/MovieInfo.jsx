import React, { useEffect, useState } from "react";
import { getFilmDetails } from "../services/Request";
import { useParams } from 'react-router-dom';

const MovieInfo = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getFilmDetails(id).then((resp) => {
      setMovieDetails(resp);
    });
    localStorage.setItem('movieId' , id);
  }, [id]);


  return (
    <>
      <div className="w-full h-full">
        <img
          className="w-full h-[400px] object-cover"
          src={`https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path}`}
          alt={movieDetails?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movieDetails?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movieDetails?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {movieDetails?.overview}
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
