import React from "react";
import BgImg from "../assets/bg-img.jpeg";
import "../styles/Landing.css"

function Landing() {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Welcome to MyBrunelPal!</h1>
            <h2>We are here to help you in any way possible.</h2>
            <h3>Proceed to a healthy way of living.</h3>
          </div>
          <figure className="header__bg">
            {/* <img src={BgImg} alt="" /> */}
          </figure>
        </div>
      </header>
    </section>
  );
}

export default Landing;
