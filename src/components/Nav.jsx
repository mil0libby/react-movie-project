import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL } from "@fortawesome/free-solid-svg-icons";
import SeachBar from "./SeachBar";
import { Link } from "react-router-dom";

export default function Nav({ setMovies, setDisplayImg }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
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
            <Link className="link" to="/">
              Home
            </Link>
            <a className="link" href="">
              Find Movies
            </a>
            <a className="link" href="">
              Contact
            </a>
          </div>
        </div>
        <SeachBar
          setMovies={setMovies}
          setDisplayImg={setDisplayImg}
        ></SeachBar>
      </div>
    </nav>
  );
}
