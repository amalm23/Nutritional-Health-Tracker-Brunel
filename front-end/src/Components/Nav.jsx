import React, { useState } from "react";
import Logo from "../assets/myBrunelPal.svg";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Nav() {
 const [isOpen, setIsOpen] = useState(false);

 const toggleMenu = () => {
   setIsOpen(!isOpen);
 };
  return (
    <nav>
      <div className="nav__container">
        <Link to={"/"}>
          <img src={Logo} alt="" className="logo" />
        </Link>
        <div className="nav__icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav__links ${isOpen ? "show__menu" : ""}`}>
          <li className="nav__list">
            <Link to={"/"} className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to={"/bruneldetails"} className="nav__link">
              Brunel Facility Details
            </Link>
            </li>
            <li className="nav__list">
              
            <Link to={"/aboutus"} className="nav__link">
              About us
            </Link>
          </li>
          <li className="nav__list">
            <Link to={"/myTips"} className="nav__link">
              myTips
            </Link>
          </li>

          <li className="nav__list">
            <Link to={"/contactus"} className="nav__link">
              Contact us
            </Link>
          </li>
          <li className="nav__list">
            <Link to={"/login"} className="nav__link">
              Log in
            </Link>
          </li>
          <li className="nav__list">
            <Link to={"/register"} className="nav__link">
              <button className="btn">Register</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
