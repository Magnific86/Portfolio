import React, { useEffect, useState } from "react";

import { projects } from "./index";
import { Project } from "../../components";
import { Blast } from "../../components";
import "./projectpage.scss";
import Aos from "aos";
import "aos/dist/aos.css";
function ProjectPage() {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  
  useEffect(() => {
    Aos.init({ duration: 2000, delay: 10 });
  }, []);


  return (
    <section className="section__projects section__padding">
{/*       <div className="fake-big">Projects</div>
      <h2 aria-label="My projects" className="section__projects-title">
        <Blast
          letterClass={letterClass}
          arrayStr={["M", "y", "", "P", "r", "o", "j", "e", "c", "t", "s"]}
          indexLetter={12}
        />
      </h2>
      <div className="section__projects-description">
       
          <p data-aos="fade-up">
            Here are some selected and challenging personal projects that I have
            worked on so far which enabled me to level up my skills to a
            fascinating point that makes me feel confident in tackling more
            difficult challenges.
          </p>
       
      </div>
      <div className="section__projects-wrapper">
        {projects.map((project, index) => {
          return <Project {...project} key={index} />;
        })}
      </div> */}
    </section>
  );
}

export default ProjectPage;
