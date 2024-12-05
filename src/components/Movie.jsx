import React from "react";
import MoviePoster from "../assets/poster.png";
import { Link } from "react-router-dom";

export default function Movie({ movie, className }) {
  console.log(movie.movie);
  return (
    <div className={`movie ${className}`}>
      <Link to={`/movie-display/${movie.imdbID}`}>
        <img
          className={`movie__poster ${className}`}
          src={movie.Poster !== "N/A" ? movie.Poster : MoviePoster}
          alt=""
        />
        <h3 className="movie__title">{`${movie.Title}`}</h3>
        <h3 className="movie__title">{`${movie.Year}`}</h3>
      </Link>
    </div>
  );
}
