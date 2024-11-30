import React from "react";
import MoviePoster from "../assets/poster.png";

export default function Movie(movie) {
  console.log(movie.movie);
  return (
    <div className="movie">
      <img
        className="movie__poster"
        src={movie.movie.Poster !== "N/A" ? movie.movie.Poster : MoviePoster}
        alt=""
      />
      <h3 className="movie__title">{`${movie.movie.Title}`}</h3>
      <h3 className="movie__title">{`${movie.movie.Year}`}</h3>
    </div>
  );
}
