import React, { useEffect } from "react";
import { useContext  } from "react";
import filmContext from "../context/store";
import { Link , useNavigate , useParams  } from "react-router-dom";

const Movie = ({ item }) => {
  const { setMovieId } = useContext(filmContext);
  const { id : ID}  = useParams();
  const navigate = useNavigate();
  const handleClick = (id) => {
    setMovieId(id);
    // navigate(`/movie/${id}`)
  };

  return (
    <Link key={item?.id} to={`/movie/${item.id}`}>
      <div
        className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
        onClick={() => handleClick(item?.id)}
      >
        <img
          className="w-full h-auto block"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
        />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            {item?.title}
          </p>
        </div>
      </div>
   </Link>
  );
};

export default Movie;