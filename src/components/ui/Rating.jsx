import React, { useEffect, useState } from "react";
import Tomatoe from "../../assets/tomatoe.png";
import Rotten from "../../assets/rotten.png";
import Fresh from "../../assets/fresh.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Rating({ r1, r2, r3 }) {
  return (
    <div className="rating__container">
      <div className="rating__wrapper">
        <span className="tomatoes__header ratings__header">
          Rotten Tomatoes {r2.Value}
        </span>
        <span>
          {r2.Value ? (
            +r2.Value.replace("%", "") < 60 ? (
              <>
                <img src={Rotten} alt="" className="tomatoe" />
              </>
            ) : +r2.Value.replace("%", "") > 80 ? (
              <img src={Fresh} alt="" className="tomatoe" />
            ) : (
              <img src={Tomatoe} alt="" className="tomatoe" />
            )
          ) : (
            <></>
          )}
        </span>
      </div>
      <div className="rating__wrapper">
        <span className="imd__header ratings__header">
          Internet Movie Database {r1.Value}
        </span>
        <span className="icon__wrapper">
          {r1.Value && +r1.Value.replace("/10", "") < 4 ? (
            <>
              <FontAwesomeIcon
                className="icon red"
                icon="fa-thumbs-down"
              ></FontAwesomeIcon>
            </>
          ) : r1.Value && +r1.Value.replace("/10", "") < 7 ? (
            <>
              <FontAwesomeIcon
                className="icon icon--up yellow"
                icon="fa-thumbs-up"
              ></FontAwesomeIcon>
            </>
          ) : (
            <>
              <FontAwesomeIcon
                className="icon icon--up green"
                icon="fa-thumbs-up"
              ></FontAwesomeIcon>
            </>
          )}
        </span>
      </div>
      <div className="rating__wrapper">
        <span className="metacritic__header ratings__header">
          Metacritic {r3.Value}
        </span>
      </div>
    </div>
  );
}
