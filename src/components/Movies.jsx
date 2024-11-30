import React from "react";
import MovieImg from "../assets/movie.svg";
import SearchAgainImg from "../assets/search-again.svg";
import ErrorImg from "../assets/not-found.svg";
import Movie from "./Movie";

export default function Movies({ movies, displayImg }) {
  return (
    <div className="movies__display--container">
      {displayImg === "default" ? (
        <>
          <div id="default" className="movies__display--default">
            <img
              id="default__img"
              className="movie__img"
              src={MovieImg}
              alt=""
            />

            <h3 id="search__results--text" className="default__text">
              search to display <span className="red">movies</span>
            </h3>
          </div>
        </>
      ) : displayImg === "not-found" ? (
        <>
          <div id="default" className="movies__display--default">
            <img
              id="error__img--nf"
              className="movie__img"
              src={ErrorImg}
              alt=""
            />
            <h3 id="search__results--text" className="default__text">
              no <span className="red">movies</span> found! try a different
              search
            </h3>
          </div>
        </>
      ) : (
        displayImg === "too-many" && (
          <>
            <div id="default" className="movies__display--default">
              <img
                id="error__img--tm"
                className="movie__img"
                src={SearchAgainImg}
                alt=""
              />
              <h3 id="search__results--text" className="default__text">
                too many results. try a longer search
              </h3>
            </div>
          </>
        )
      )}

      <div id="movies" className="movies__display">
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.imdbID}></Movie>
        ))}
      </div>
    </div>
  );
}
