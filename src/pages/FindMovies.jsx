import React from "react";
import { useState } from "react";
import Nav from "../components/Nav";
import Movies from "../components/Movies";
import SeachBar from "../components/SeachBar";

export default function FindMovies() {
  const [movies, setMovies] = useState(() => []);
  const [displayImg, setDisplayImg] = useState("default");

  return (
    <>
      <SeachBar setMovies={setMovies} setDisplayImg={setDisplayImg}></SeachBar>
      {<Movies displayImg={displayImg} movies={movies}></Movies>}
    </>
  );
}
