import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import './projects.scss'

function Project(props){
  const { imgUrl, name, desc, stack, gitHubUrl, website } = props
  
  useEffect(() => {
    Aos.init({ duration: 2000, delay: 10 });
  }, []);
  return (
   
      <section className="section__projects-single-projects" data-aos="fade-up" >
        <img src={imgUrl} alt="" />
        <div className="section__projects-contents">
          <p>{name}</p>
          <p className="desc">{desc}</p>
          <div className="section__projects-stack">
            <h2>Built with</h2>
            <span>{stack}</span>
         
          </div>
          <div className="section__projects-icon">
            <a href={gitHubUrl.url} className="switch__color">
              {gitHubUrl.icon}
            </a>
            <a href={website.url} className="switch__color">
              {website.icon}
            </a>
          </div>
       
        </div>
      </section>

  )
}

export default Project
