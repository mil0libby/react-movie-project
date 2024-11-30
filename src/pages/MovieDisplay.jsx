import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "../components/ui/Rating";

export default function MovieDisplay() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loaded, setLoaded] = useState(false);
  async function getMovie() {
    console.log(id);
    const search_string = `https://www.omdbapi.com/?i=${id}&apikey=421fadc`;

    const response = await fetch(search_string);
    const movie_object = await response.json();

    return movie_object;
  }

  useEffect(() => {
    async function fetchMovie() {
      try {
        const movieData = await getMovie(); // Wait for the promise
        setMovie(movieData); // Store the result in state
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    }

    fetchMovie();
  }, [id]); // Runs when `id` changes

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(movie);
      setLoaded(true);
    }, 2000); // Delay of 1000ms (1 second)

    return () => clearTimeout(timeout); // Cleanup the timeout on dependency change or unmount
  }, [movie]);

  return (
    <div className="display__container">
      <div className="row">
        <div className="movie__container">
          <div className="movie__container--left">
            <div className="movie__title--display--wrapper">
              <h3 className="movie__title--display">{loaded && movie.Title}</h3>
              <h4 className="movie__genre">{loaded && movie.Genre}</h4>
            </div>
            <figure className="movie__poster--wrapper">
              <img
                src={loaded && movie.Poster}
                alt=""
                className="movie__poster"
              />
            </figure>
            <Rating
              r1={loaded && movie.Ratings[0]}
              r2={loaded && movie.Ratings[1]}
              r3={loaded && movie.Ratings[2]}
            ></Rating>
          </div>
          <div className="movie__container--right">
            <div className="movie__description">
              <p className="director">Director: {loaded && movie.Director}</p>
              <p className="actors">Actors: {loaded && movie.Actors}</p>
              <p className="plot">{loaded && movie.Plot}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//import OpenAI from "openai";
// async function chatGBT() {
//   const openai = new OpenAI();
//   const completion = await openai.chat.completions.create({
//     model: "gpt-4o",
//     messages: [{ role: "user", content: "write a haiku about ai" }],
//   });
// }
