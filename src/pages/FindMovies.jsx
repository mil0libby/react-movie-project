import React, { useEffect } from "react";
import { useState } from "react";
import Nav from "../components/Nav";
import Movies from "../components/Movies";
import SeachBar from "../components/SeachBar";

export default function FindMovies() {
  const [movies, setMovies] = useState(() => []);
  const [displayImg, setDisplayImg] = useState("default");
  const [arr, setArr] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1]); // length of 9

  return (
    <>
      <SeachBar setMovies={setMovies} setDisplayImg={setDisplayImg}></SeachBar>
      {displayImg !== "default" ? (
        <Movies displayImg={displayImg} movies={movies}></Movies>
      ) : (
        <div className="movies__display--container">
          <div className="movies__display">
            {arr.map(() => (
              <div className="movie__wrapper--skeleton">
                <div className="movie__img--skeleton--large skeleton">
                  <div className="movie__poster--skeleton--recommended"></div>
                </div>
                <h3 className="movie__title--skeleton--recommended skeleton">
                  Inception
                </h3>
                <h3 className="movie__title--skeleton--recommended skeleton">
                  2010
                </h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
