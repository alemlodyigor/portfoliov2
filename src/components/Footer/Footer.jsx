import React from "react";

import classes from "./Footer.module.css";

import IMG from "../../assets/avatar.png";
import Clock from "../Clock/Clock";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
        <img src={IMG} className={classes.containerIMG} alt="Start icon" />
        <p className={classes.containerText}>Start</p>
      </div>

      <div className={classes.footerContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={classes.icon}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className={classes.clock}>
          <Clock />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
