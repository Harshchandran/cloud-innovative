import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

export const MovieDetail = () => {
  const location = useLocation();
  const { movie } = location.state || {};
  if (!movie) return <p>No movie data available</p>;

  return (
    <>
      <div className="movie-detail">
        <div className="movie-detail-box">
          <h3 className="movie-id">{movie?.id}</h3>
          <img className="movie-image" src={movie?.Poster} alt={movie?.Title} />
          <h3 className="movie-name">{movie?.Title}</h3>
          <p className="movie-year">{movie?.Year}</p>
          <p className="movie-type">{movie?.Type}</p>
          <p className="movie-rating">{movie?.rating}</p>
        </div>
      </div>
    </>
  );
};
