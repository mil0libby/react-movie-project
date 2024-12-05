import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav>
      <div className="row">
        {openMenu && (
          <div className="menu">
            <ul>
              <Link to="/">
                <li className="menu__text">Home</li>
              </Link>
              <Link to="/find-movies/funny">
                <li className="menu__text">Find Movies</li>
              </Link>
              <Link to="/">
                <li className="menu__text">Contact</li>
              </Link>
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
            <Link className="link" to="/find-movies/christmas">
              Find Movies
            </Link>
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
