import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function LandingSeachBar() {
  const [value, setValue] = useState("football");

  return (
    <div className="search__container">
      <div className="search__bar--wrapper">
        <input
          type="text"
          name=""
          className="search__bar search__bar--landing"
          placeholder="search here"
          id="search"
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <Link to={`/find-movies/${value}`}>
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
