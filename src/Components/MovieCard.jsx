import React, { useContext } from "react";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  
  return (
    <>
      <Link to={`/movie/${movie?.id}`} state={{ movie }} className="movie-card" key={movie?.id}>
        <img src={movie?.Poster} alt={movie?.Title} className="movie-image" />
        <h3 className="movie-name">{movie?.Title}</h3>
        <p className="movie-year"> {movie?.Year} </p>
        <p className="movie-type">{movie?.Type}</p>
        <p className="movie-rating">{movie?.rating}</p>
      </Link>
    </>
  );
};
