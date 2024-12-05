import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Recommended from "../components/Recommended";

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
    }, 1000); // Delay of 1000ms (2 second)

    return () => clearTimeout(timeout); // Cleanup the timeout on dependency change or unmount
  }, [movie]);

  return (
    <div className="display__container">
      <div className="row">
        <div className="movie__container">
          <div className="movie__container--left">
            <div className="movie__title--display--wrapper">
              {loaded ? (
                <h3 className="movie__title--display">{movie.Title}</h3>
              ) : (
                <h3 className="movie__title--display--skeleton skeleton"></h3>
              )}
              {loaded ? (
                <h4 className="movie__genre">
                  {movie.Genre.split(",").map((genre) => (
                    <span className="genre__wrapper">{genre}</span>
                  ))}
                </h4>
              ) : (
                <h4 className="genre__wrapper--skeleton skeleton"></h4>
              )}
            </div>

            <figure className="movie__poster--wrapper">
              {loaded ? (
                <img
                  src={loaded && movie.Poster}
                  alt=""
                  className="movie__poster--main"
                />
              ) : (
                <div className="movie__poster--skeleton skeleton"></div>
              )}
            </figure>

            {loaded ? (
              <Rating
                r1={loaded && movie.Ratings[0]}
                r2={loaded && movie.Ratings[1]}
                r3={loaded && movie.Ratings[2]}
              ></Rating>
            ) : (
              <div className="rating__container--skeleton skeleton"></div>
            )}
          </div>
          <div className="movie__container--right">
            <div className="movie__description">
              <p className="director">
                Director{" "}
                {loaded ? (
                  <span className="blue-ml">{movie.Director}</span>
                ) : (
                  <span className="movie__info--skeleton skeleton">
                    Christopher Nolan
                  </span>
                )}
              </p>
              <p className="actors">
                <span className="actors--text">Actors</span>
                {loaded ? (
                  <span className="blue-ml">{movie.Actors}</span>
                ) : (
                  <span className="movie__info--skeleton skeleton">
                    Christopher Nolan
                  </span>
                )}
              </p>
              {loaded ? (
                <p className="plot">{movie.Plot}</p>
              ) : (
                <p className="plot skeleton">
                  A thief who steals corporate secrets through the use of
                  dream-sharing technology is given the inverse task of planting
                  an idea into the mind of a C.E.O., but his tragic past may
                  doom the project and his team to disaster.
                </p>
              )}
            </div>
            <div className="recommended__movies">
              <h2 className="recommended__header">Recommended Movies</h2>
              {loaded ? (
                <Recommended ID={id}></Recommended>
              ) : (
                <div className="recommended__container recommended__container--skeleton">
                  <div className="movie__wrapper--skeleton--rec">
                    <div className="movie__img--skeleton skeleton">
                      <div className="movie__poster--skeleton--recommended"></div>
                    </div>
                    <h3 className="movie__title--skeleton--recommended skeleton">
                      Inception
                    </h3>
                    <h3 className="movie__title--skeleton--recommended skeleton">
                      2010
                    </h3>
                  </div>
                  <div className="movie__wrapper--skeleton--rec">
                    <div className="movie__img--skeleton skeleton">
                      <div className="movie__poster--skeleton--recommended"></div>
                    </div>
                    <h3 className="movie__title--skeleton--recommended skeleton">
                      Inception
                    </h3>
                    <h3 className="movie__title--skeleton--recommended skeleton">
                      2010
                    </h3>
                  </div>
                  <div className="movie__wrapper--skeleton--rec">
                    <div className="movie__img--skeleton skeleton">
                      <div className="movie__poster--skeleton--recommended"></div>
                    </div>
                    <h3 className="movie__title--skeleton--recommended skeleton">
                      Inception
                    </h3>
                    <h3 className="movie__title--skeleton--recommended skeleton">
                      2010
                    </h3>
                  </div>
                  <div className="movie__wrapper--skeleton--rec">
                    <div className="movie__img--skeleton skeleton">
                      <div className="movie__poster--skeleton--recommended"></div>
                    </div>
                    <h3 className="movie__title--skeleton--recommended skeleton">
                      Inception
                    </h3>
                    <h3 className="movie__title--skeleton--recommended skeleton">
                      2010
                    </h3>
                  </div>
                </div>
              )}
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
