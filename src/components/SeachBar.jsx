import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";

export default function SeachBar({ setMovies, setDisplayImg }) {
  const { search } = useParams();
  const [searchValue, setSearchValue] = useState(search);
  const [clicked, setClicked] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (clicked) {
      console.log("Search updated");
      fetchMovieData(searchValue);
    }
  }, [clicked]);

  useEffect(() => {
    console.log("Search value: " + searchValue);
  }, [searchValue]);

  async function fetchMovieData(search) {
    const encodedSearch = encodeURIComponent(search);
    const search_string = `https://www.omdbapi.com/?i=tt3896198&apikey=421fadc&s=${encodedSearch}`;

    const response = await fetch(search_string);
    let movies = await response.json();

    if (movies.Response === "False" || search.length === 0) {
      console.log(movies.Error);

      if (movies.Error === "Movie not found!") {
        console.log("Not found");
        setDisplayImg("not-found");
        setMovies([]);
      } else if (movies.Error === "Too many results.") {
        console.log("Too many");
        setDisplayImg("too-many");
        setMovies([]);
      }
    } else {
      console.log("Valid Search");
      setMovies(movies.Search);
      setDisplayImg("none");
    }
    setClicked(false);
  }
  return (
    <div className="search__container">
      <h2 className="search__header">Find Movies</h2>
      <div className="search__bar--wrapper">
        <input
          type="text"
          name=""
          className="search__bar"
          placeholder={searchValue}
          id="search"
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
        <Link
          to={`/find-movies/${searchValue}`}
          onClick={() => {
            setClicked(true);
          }}
        >
          <button>
            <FontAwesomeIcon
              className="fa-brands"
              icon="fa-solid fa-magnifying-glass"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
