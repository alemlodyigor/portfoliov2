import React from "react";

import classes from "./Menu.module.css";

const Menu = (props) => {
  return (
    <section className={classes.menuContainer}>
      <div></div>
      <div className={classes.option}>
        <button className={classes.btn} onClick={props.projects}>
          Projects
        </button>
        <button className={classes.btn}>About me</button>
        <button className={classes.btn}>Contact</button>
        <button className={classes.btn}>Languages</button>
      </div>
    </section>
  );
};

export default Menu;
