import React from "react";
import LandingSearchBar from "../components/ui/LandingSearchBar";
import MovieImg from "../assets/horror-movie.svg";
import Nav from "../components/Nav";

export default function Landing() {
  return (
    <div>
      <section id="landing">
        <div className="row row__landing">
          <div className="landing__header--container">
            <h2 className="landing__header">
              Best site for finding top quality movies
            </h2>
            <p className="landing__subheader red--black-border">
              Find your perfect movie with
              <span className="red"> Elite Movies</span>
            </p>
          </div>
          <LandingSearchBar></LandingSearchBar>
          <img
            className="movie__img movie__img--landing"
            src={MovieImg}
            alt=""
          />
        </div>
      </section>
    </div>
  );
}
