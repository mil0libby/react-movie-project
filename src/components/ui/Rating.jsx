import React, { useEffect, useState } from "react";
import Tomatoe from "../../assets/tomatoe.png";
import Rotten from "../../assets/rotten.png";
import Fresh from "../../assets/fresh.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Rating({ r1, r2, r3 }) {
  return (
    <div className="rating__container">
      <div className="rating__wrapper">
        {r2 && (
          <span className="tomatoes__header ratings__header">
            Rotten Tomatoes {r2 ? r2.Value : null}
          </span>
        )}
        <span>
          {r2 ? (
            r2.Value ? (
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
            )
          ) : null}
        </span>
      </div>
      <div className="rating__wrapper">
        {r1 && (
          <span className="imd__header ratings__header">
            Internet Movie Database {r1 ? r1.Value : null}
          </span>
        )}
        <span className="icon__wrapper">
          {r1 ? (
            r1.Value && +r1.Value.replace("/10", "") < 4 ? (
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
            )
          ) : null}
        </span>
      </div>
      <div className="rating__wrapper">
        {r3 && (
          <span className="metacritic__header ratings__header">
            Metacritic {r3 ? r3.Value : null}
          </span>
        )}
        <span className="icon__wrapper">
          {r3 ? (
            r3.Value && +r3.Value.replace("/100", "") < 25 ? (
              <>
                <FontAwesomeIcon
                  className="icon red"
                  icon="fa-temperature-empty"
                />
              </>
            ) : r3.Value && +r3.Value.replace("/100", "") < 50 ? (
              <>
                <FontAwesomeIcon
                  className="icon red"
                  icon="fa-temperature-quarter"
                />
              </>
            ) : r3.Value && +r3.Value.replace("/100", "") < 75 ? (
              <>
                <FontAwesomeIcon
                  className="icon yellow"
                  icon="fa-temperature-half"
                />
              </>
            ) : (
              <>
                <FontAwesomeIcon
                  className="icon green"
                  icon="fa-temperature-three-quarters"
                ></FontAwesomeIcon>
              </>
            )
          ) : null}
        </span>
      </div>
    </div>
  );
}
