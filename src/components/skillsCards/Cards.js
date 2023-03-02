import { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { skillSet } from '../../data/data'
import './cards.scss'

function Cards(){
  
  useEffect(() => {
    Aos.init({ duration: 2000, delay: 10 });
  }, []);
  return (
    <div className="about-description-skills">
      {skillSet.map((item, index) => (
       
          <a
          data-aos="fade-up"
          
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="skill-container"
          >
            {item.icon}
            <span className="skill__name">{item.spanText}</span>
          </a>
    
      ))}
    </div>
  )
}

export default Cards
