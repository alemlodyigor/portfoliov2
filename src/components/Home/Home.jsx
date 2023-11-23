import React from "react";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import { useState } from "react";
import classes from "./Home.module.css";

const Home = () => {
  const [menu, showMenu] = useState(false);

  const showMenuHandle = () => showMenu((prevState) => !prevState);
  return (
    <>
      <main className={classes.home}>
        Home
        {menu && <Menu />}
      </main>
      <Footer menu={showMenuHandle} />
    </>
  );
};

export default Home;
