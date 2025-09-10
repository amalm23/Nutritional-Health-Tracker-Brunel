import React from "react";
import "../styles/Aboutus.css";
import image1 from "../assets/Teamwork.jpg";
import image2 from "../assets/myBrunelPal.svg";
function Aboutus() {
  return (
    <div className="container aboutus_container">
      <div className="row contact__row">
        <div className="imagesabout">
          <img src={image1} alt="" className="Teamwork_image1" />
          <img src={image2} alt="" className="MBPLOGO_image2" />
        </div>

        <center>
          <h1 className="register__title">About us</h1>
        </center>
        <center>
          <p>
            Welcome! You are at the right place to kickstart your healthy
            lifestyle!
          </p>
          <p>
            We are a dedicated team of 8 who have the key knowlegde to help you
            balance your health with academic life.
          </p>

          <h1 className="register__title">What is our mission? </h1>

          <p>

            This website focuses on helping Brunel Students to take care of
            their health and lifestyle.
          </p>
          <p>

            We know how it feels to be lacking on poor quality sleep, healthy
            nutrition, and an effective fitness routine.
          </p>
          <p>
            But we got YOU covered! Our mission is to support you and in this
            web app you will find helpful information covering multiple aspects
            including:
          </p>
          <p> Physical Health, Nutritional Health and Mental Health</p>

          <p>
            <b> So come on board, to a better living! </b>
          </p>
          <p>Yours in health and wellbeing, Group 38</p>
        </center>
      </div>
    </div>
  );
}

export default Aboutus;
