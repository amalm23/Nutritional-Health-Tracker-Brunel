import React from "react";
import Logo from "../assets/myBrunelPal.svg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <Link to={'/'}>
            <img src={Logo} alt="" className="logo"/>
        </Link>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to={'/'} className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to={'/physicalhealthtracker'} className="nav__link">
              Physical Health Tracker
            </Link>
          </li>
          <li className="nav__list">
            <Link to= {'/mentalhealthquiz'} className="nav__link">
              Mental Health Quiz
            </Link>
          </li>

          <li className="nav__list">
            <Link to= {'/editprofile'} className="nav__link">
              Edit Profile
            </Link>
          </li>

          <li className="nav__list">
            <Link to= {'/thoughtdiary'} className="nav__link">
              Thought Diary
            </Link>
          </li>

          <li className="nav__list">
            <Link to= {'/bmitracker'} className="nav__link">
              Nutrional/Physical BMI Tracker
            </Link>
          </li>

          <li className="nav__list">
            <Link to={'/thoughttable'} className="nav__link">
              Thought Diary Table
            </Link>
          </li>

          <li className="nav__list">
            <Link to= {'/showPastNutrionalRecords'} className="nav__link">
              Nutritional Health Table 
            </Link>
          </li>
         
          <li className="nav__list">
            <Link to={'/nutrionalhealthform'} className="nav__link">
              Nutritional Health Tracker 
            </Link>
          </li>
          <li className="nav__list">
            <Link to={'/login'} className="nav__link">
                <button className = "btn"> Logout </button>
            </Link>
          </li>
          
         
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
