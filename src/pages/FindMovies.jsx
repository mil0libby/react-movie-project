import React from "react";
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Movies from "../components/Movies";

export default function FindMovies() {
  const [movies, setMovies] = useState([]);
  const [displayImg, setDisplayImg] = useState("default");

  useEffect(() => console.log("movies:" + movies), [movies]);

  useEffect(() => console.log("display-img: " + displayImg), [displayImg]);

  function setMoviesSearchBar(moviess) {
    setMovies(moviess);
  }

  function setDisplayImgSearchBar(displayImg) {
    setDisplayImg(displayImg);
  }

  return (
    <>
      <Nav
        setMovies={setMoviesSearchBar}
        setDisplayImg={setDisplayImgSearchBar}
      ></Nav>
      <Movies displayImg={displayImg} movies={movies}></Movies>
    </>
  );
}
