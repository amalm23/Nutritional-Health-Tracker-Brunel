import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Brunel_logo.png";
import "../styles/Footer.css"

function Footer() {
  return (
    <footer>
      <div className="footer__container">
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
                About us
            </Link> 
            
            <Link to={'/myTips'}className="footer__link">
                myTips
            </Link> 

            <Link to= {'/contactus'}className="footer__link">
                Contact us
            </Link>

            <Link to= {'/login'}className="footer__link">
                Login
            </Link>
            
            <Link to= {'/register'}className="footer__link">
                Register
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
