import React from "react";

import classes from "./Projects.module.css";

import HTML from "../../assets/html.png";
import JS from "../../assets/js.png";
import PHP from "../../assets/php.png";
import SCSS from "../../assets/sass.png";
import REACT from "../../assets/react.png";
import NODE from "../../assets/node.png";
import CSS from "../../assets/css.png";

const Projects = (props) => {
  return (
    <section className={classes.projectsContainer}>
      <div className={classes.projectsHeader}>
        <p className={classes.projectsHeaderName}>Projects</p>
        <button className={classes.icon} onClick={props.projects}>
          X
        </button>
      </div>
      <section className={classes.projectsList}>
        <div className={classes.project}>
          <img src="" alt="" />
          <p>MyWeather - simple weather app</p>
          <p>Technologies</p>
          <div className={classes.technologiesContainer}>
            <div className={classes.technologiesName}>
              <img src={HTML} alt="" />
              <p>HTML</p>
            </div>
            <div className={classes.technologiesName}>
              <img src={JS} alt="" />
              <p>JavaScript</p>
            </div>
            <div className={classes.technologiesName}>
              <img src={SCSS} alt="" />
              <p>SCSS</p>
            </div>
          </div>
          <div className={classes.projectBtn}>
            <button>GitHub</button>
            <button>Live</button>
          </div>
        </div>

        <div className={classes.project}>
          <img src="" alt="" />
          <p>Ger-Instal - (ordered site)</p>
          <div className={classes.technologiesContainer}>
            <div className={classes.technologiesName}>
              <img src={HTML} alt="" />
              <p>HTML</p>
            </div>
            <div className={classes.technologiesName}>
              <img src={JS} alt="" />
              <p>JavaScript</p>
            </div>
            <div className={classes.technologiesName}>
              <img src={PHP} alt="" />
              <p>PHP</p>
            </div>
            <div className={classes.technologiesName}>
              <img src={SCSS} alt="" />
              <p>SCSS</p>
            </div>
          </div>
          <div className={classes.projectBtn}>
            <button>GitHub</button>
            <button>Live</button>
          </div>
        </div>

        <div className={classes.project}>
          <img src="" alt="" />
          <p>Discord music bot</p>
          <div className={classes.technologiesContainer}>
            <div className={classes.technologiesName}>
              <img src={JS} alt="" />
              <p>JavaScript</p>
            </div>
            <div className={classes.technologiesContainer}>
              <div className={classes.technologiesName}>
                <img src={NODE} alt="" />
                <p>Node.js</p>
              </div>
            </div>
          </div>
          <div className={classes.projectBtn}>
            <button>GitHub</button>
          </div>
        </div>

        <div className={classes.project}>
          <img src="" alt="" />
          <p>Discord verification bot</p>
          <div className={classes.technologiesContainer}>
            <div className={classes.technologiesName}>
              <img src={JS} alt="" />
              <p>JavaScript</p>
            </div>
            <div className={classes.technologiesName}>
              <img src={NODE} alt="" />
              <p>Node.js</p>
            </div>
          </div>
          <div className={classes.projectBtn}>
            <button>GitHub</button>
          </div>
        </div>

        <div className={classes.project}>
          <img src="" alt="" />
          <p>NoteWave - online notes app</p>
          <div className={classes.technologiesContainer}>
            <div className={classes.technologiesName}>
              <img src={REACT} alt="" />
              <p>React</p>
            </div>
            <div className={classes.technologiesName}>
              <img src={SCSS} alt="" />
              <p>SCSS</p>
            </div>
          </div>
          <div className={classes.projectBtn}>
            <button>GitHub</button>
          </div>
        </div>

        <div className={classes.project}>
          <img src="" alt="" />
          <p>Kangaroo - random database generator</p>
          <div className={classes.technologiesContainer}>
            <div className={classes.technologiesName}>
              <img src={REACT} alt="" />
              <p>React</p>
            </div>
            <div className={classes.technologiesName}>
              <img src={CSS} alt="" />
              <p>Module CSS</p>
            </div>
          </div>
          <div className={classes.projectBtn}>
            <button>GitHub</button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Projects;
