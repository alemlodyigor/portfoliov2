import React from "react";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import { useState } from "react";
import classes from "./Home.module.css";
import Projects from "../Projects/Projects";

const Home = () => {
  const [menu, showMenu] = useState(false);
  const [projects, setProjects] = useState(false);

  const showMenuHandle = () => showMenu((prevState) => !prevState);

  const setProjectsHandle = () => {
    showMenu(false);
    setProjects((prevState) => !prevState);
  };

  return (
    <>
      <main className={classes.home}>
        Home
        {projects && <Projects projects={setProjectsHandle} />}
        {menu && <Menu projects={setProjectsHandle} />}
      </main>
      <Footer menu={showMenuHandle} />
    </>
  );
};

export default Home;
