import React, { useEffect, useState } from "react";
import myCV from "../../assets/pdf/rezume.pdf";
import Aos from "aos";
import "aos/dist/aos.css";

// components
import { Cards, Blast } from "../../components";
import "./about.scss";

function About() {
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
    <>
      
        <div className="fake-big">About</div>
  
      <div className="section-about-wrapper section__padding">
        <article className="section-about-description">
          <div>
            <h2 arial-aria-label="About and skills">
              <Blast
                letterClass={letterClass}
                arrayStr={[
                  "A",
                  "b",
                  "o",
                  "u",
                  "t",
                  "",
                  "&",
                  "",
                  "S",
                  "k",
                  "i",
                  "l",
                  "l",
                  "s",
                ]}
                indexLetter={15}
              />
            </h2>
          
              <p data-aos="fade-up">
                I'm an ambitious Front-End Developer who's passionate about
                coding and looking for a role in the established IT company with
                the opportunity to work with the latest technologies on
                challenging and diverse projects.
              </p>
           
           
              <p data-aos="fade-up">
                I'm from Moscow but currently living in Tashkent. I'm a
                programmer who loves building cool UI effects, dynamic webpages
                with amazing animations and creating intuitive, dynamic user
                experiences. I also love to reach out to new opportunities
                accross the globe that will enhance my skills and get the
                opporutinity to work with other programmers as well
              </p>
                
              <p data-aos="fade-up">
                If I could say one of the most interesting things about me, it's
                the fact that I'm always ready for any challenges that comes to
                my way. Here's my CV below for more details.
              </p>
         
              <a
                style={{ marginTop: "2rem" }}
                href={myCV}
                download
                className="contact-button submit-button"
              >
                <div data-aos="fade-right">
                  <span className="bg switch__bg"></span>
                  <span className="base switch__border-color"></span>
                  <span className="text">Download CV</span>
                </div>
              </a>
        
          </div>
        </article>
        {/* programming language cards */}
        <Cards  />
      </div>
    </>
  );
};

export default About;
