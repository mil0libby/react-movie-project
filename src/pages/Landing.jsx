import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import LandingSearchBar from "../components/ui/LandingSearchBar";
import MovieImg from "../assets/horror-movie.svg";

export default function Landing() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <nav>
        <div className="row">
          {openMenu && (
            <div className="menu">
              <ul>
                <li className="menu__text">Home</li>
                <li className="menu__text">Find Movies</li>
                <li className="menu__text">Contact</li>
              </ul>

              <FontAwesomeIcon
                className="fa-solid exit"
                icon="fa-solid fa-x"
                onClick={() => setOpenMenu(false)}
              />
            </div>
          )}
          <div className="links__container">
            <div className="logo__wrapper">
              <img className="logo" src={Logo} alt="" />
            </div>

            <FontAwesomeIcon
              className="btn__open-menu fa-solid"
              icon="fa-solid fa-bars"
              onClick={() => setOpenMenu(true)}
            />

            <div className="links__wrapper">
              <a className="link" href="">
                Home
              </a>
              <Link className="link" to="/find-movies">
                Find Movies
              </Link>
              <a className="link" href="">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      <section id="landing">
        <div className="row row__landing">
          <div className="landing__header--container">
            <h2 className="landing__header">
              Best site for finding top quality movies
            </h2>
            <p className="landing__subheader">
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
