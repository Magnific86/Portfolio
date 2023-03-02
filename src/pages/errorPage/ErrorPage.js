import { Link } from "react-router-dom";
import feelingblue from "../../assets/images/undraw_feeling_blue_-4-b7q.svg";


import "./errorpage.scss";

const ErrorPage = () => {
  return (
    <div className="section__errorpage section__padding">
      <div className="section__errorpage-content">
      
          <h2>Oops Page Not fount</h2>
      
     
          <div className="error404">
            <h2> 404</h2>
          </div>
       
     
          <Link to="/" className="contact-button">
            <div>
              <span className="bg switch__bg"></span>
              <span className="base switch__border-color"></span>
              <span className="text">Back Home</span>
            </div>
          </Link>
     
      </div>
     
        <img className="errorPageSvg" src={feelingblue} alt="feeling bule" />
     
    </div>
  );
};

export default ErrorPage;
