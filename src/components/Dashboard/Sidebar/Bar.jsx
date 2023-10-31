import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Bar.module.css";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import Inner from "../../Dashboard/InnerBar/Inner";

const Bar = () => {
  const [isHomeActive, setIsHomeActive] = useState(true);
  const [isCarActive, setIsCarActive] = useState(false);

  const toggleHome = () => {
    setIsHomeActive(!isHomeActive);

    if (isHomeActive) {
      setIsHomeActive(false);
    } else {
      setIsCarActive(false);
    }
  };

  const toggleCar = () => {
    setIsCarActive(!isCarActive);

    if (isCarActive) {
      setIsCarActive(false);
    } else {
      setIsHomeActive(false);
    }
  };

  return (
    <div className={styles.sideNav}>
      <div>
        {isHomeActive && <Inner cars={false} />}
        {isCarActive && <Inner cars={true} />}
      </div>
      <div>
        <div className="d-flex w-100 flex-column align-items-center justify-content-center mt-3">
          <NavLink
            className={`w-100 py-1`}
            isActive={(match) => {
              if (match) {
                toggleHome();
              }
              return match !== null;
            }}
          >
            <button
              className={`border-0 p-2 bg-transparent w-100 ${
                isHomeActive ? "text-white" : ""
              }`}
              onClick={toggleHome}
            >
              <AiIcons.AiFillHome color="white" />
              <p className="text-white" style={{ fontSize: "0.75rem" }}>
                Dashboard
              </p>
            </button>
          </NavLink>
        </div>
        <div className="d-flex w-100 flex-column align-items-center justify-content-center">
          <NavLink
            className="w-100 py-1"
            isActive={(match) => {
              if (match) {
                toggleCar();
              }
              return match !== null;
            }}
          >
            <button
              className={`border-0 p-2 bg-transparent w-100 ${
                isCarActive ? "text-white" : ""
              }`}
              onClick={toggleCar}
            >
              <FaIcons.FaTruck color="white" />
              <p className="text-white" style={{ fontSize: "0.75rem" }}>
                Cars
              </p>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Bar;
