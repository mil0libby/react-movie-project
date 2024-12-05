import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { useLocation, useParams } from "react-router-dom";

// tt1375666
// tt0317219
// tt0209144
// tt0120737
// tt11145118

export default function Recommended({ ID }) {
  const [movies, setMovies] = useState();
  const [URLs, setURLs] = useState([
    "https://www.omdbapi.com/?i=tt1375666&apikey=421fadc",
    "https://www.omdbapi.com/?i=tt0317219&apikey=421fadc",
    "https://www.omdbapi.com/?i=tt0209144&apikey=421fadc",
    "https://www.omdbapi.com/?i=tt1877830&apikey=421fadc",
  ]);

  async function getMovies() {
    async function getMovie(URL) {
      let movie_object = null;
      if (URL.includes(ID)) {
        const response = await fetch(
          "https://www.omdbapi.com/?i=tt0111161&apikey=421fadc"
        );
        movie_object = await response.json();
      } else {
        const response = await fetch(URL);
        movie_object = await response.json();
      }

      return movie_object;
    }

    // Use Promise.all to resolve all promises in parallel
    const movie_arr = await Promise.all(URLs.map((url) => getMovie(url)));
    return movie_arr;
  }

  useEffect(() => {
    async function fetchMovie() {
      try {
        const movieData = await getMovies();
        setMovies(movieData); // Store resolved movie objects
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    }

    fetchMovie();
  }, [ID]);

  useEffect(() => console.log(ID), [ID]);
  return (
    <>
      {movies ? (
        <div className="recommended__container">
          {movies.map((movie, index) => {
            return (
              <Movie key={index} movie={movie} className={"movie--rec"}></Movie>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
