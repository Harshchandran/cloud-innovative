import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";

export const MovieList = ({ data }) => {
  return (
    <>
      <div className="movie-list">
        {data.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
};
