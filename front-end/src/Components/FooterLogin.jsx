import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Brunel_logo.png";
import "../styles/Footer.css"

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link>
            <figure className="footer__logo">
              <img src={Logo} alt="" className="footer__logo--img" />
            </figure>
          
          </Link>
          <div className="footer__list">
            <Link to={'/'} className="footer__link">
                Home
            
            <Link to={'/aboutus'} className="footer__link">
                Physical Health Tracker
            </Link> 

            <Link to= {'/mentalhealthquiz'}className="footer__link">
                Mental Health Quiz
            </Link>

            <Link to= {'/showPastNutrionalRecords'}className="footer__link">
                Nutritional Health Table 
            </Link>
            
            <Link to={'/nutrionalhealthform'}className="footer__link">
                Nutritional Health Tracker
            </Link> 
            
            <Link to= {'/login'}className="footer__link">
                Logout
            </Link>
            
          </Link>
          <div className="footer__copyright">Copyright &copy; 2023 MBP</div>
          
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
