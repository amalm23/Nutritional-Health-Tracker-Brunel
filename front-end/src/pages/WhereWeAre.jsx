import React from "react";
import Aboutus from "./Aboutus";
import Landing from "../Components/Landing";
import Tips from "../Components/Tips";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import {AiFillCar} from "react-icons/ai";
import {IoMdTrain} from "react-icons/io";
import {IoMdWalk} from "react-icons/io";
import {IoMdBicycle} from "react-icons/io";


function WhereWeAre() {
  return (
        <div className="container">
          <div className="row contact__row">
            <center>
            <h1 className="register__title"> Brunel Mental Health Facilities </h1>
            <p>
                {" "}
                The campus has a Student Support and Welfare Team to cater for several mental health needs:{" "}
              </p>
              <p>
                {" "}
                - Support for disabled students via DSA (able to cater for individual needs via ECs or Exam assistance) {" "}
              </p>
              <p>
                {" "}
                - General support with Student Well-Being {" "}
              </p>
              <p>
                {" "}
                For more details, access the following page:  {" "}
                <a href="https://www.brunel.ac.uk/life/supporting-you/disability-and-dyslexia/support-at-brunel"> Brunel Mental Health Support </a>
              </p>
              <h1 className="register__title"> Brunel Physical Health Facilities </h1>
            <p>
                {" "}
                The campus offers memberships, with Off-Peak being £80 a year, Peak being £100 a year, and Premium Being £150 a year.{" "}
              </p>
              <p>
                {" "}
               Brunel also offers a Sports App, which allows for booking of various sporting events:  {" "}
               <a href= "https://www.brunel.ac.uk/life/sport/Brunel-Sport-mobile-app"> Download the app </a>
                </p>
              <p>
                {" "}
                For more details, access the following page:  {" "}
                <a href="https://www.brunel.ac.uk/life/sport"> Sport Information </a>
              </p>
              <h1 className="register__title"> Brunel Nutritional Health Facilities </h1>
            <p>
                {" "}
                The campus offers various food and drink places, with Halal, Vegan and vegetarian options: {" "}
                <a href="https://www.brunel.ac.uk/life/shops/Brunel-Uni-food"> Food Information </a>
              </p>
              <p>
                {" "}
               Options not healthy enough? Dont worry! Uxbridge is just a walk and bus stop away! Healthy Alternatives include:  {" "}
               <p> Tikka Nation </p>
               <p> Wagamama </p>
               <p> Kokoro </p>
               <p> Prezzo </p>
               <p> And more! </p>
                </p>
              <p>
                {" "}
                As mentioned below, Uxbridge is a short tube/car/walk away from uni! {" "}
              </p>
              <h1 className="register__title"> Contact and Travel Information </h1>
            </center>
            <center>
              <p>
                {" "}
                If you want to go to the campus, or contact the staff, use the following details:{" "}
              </p>
              <p>
                {" "}
                <ImLocation/> 
                <span> Kingston Ln, Uxbridge </span>
                {" "}
              </p>
              <p>
              <BsFillTelephoneFill/>
                <span> +44 (0)1895 274000 </span>
              </p>
              <p>
              <AiFillCar/>
                <span> Access through M25, M40 or M4. Search through sat nav: UB8 3PH </span>
              </p>
              <p>
              <IoMdTrain/>
                <span> Go via Metropolitan/Piccadilly Line on the Tube to Uxbridge Station before accessing buses taking you past the campus. </span>
              </p>
              <p>
              <IoMdTrain/>
                <span> Alternatively, you can go to West Ruislip on the Central Line and Hayes and Harlington on the Elizabeth Line, all with bus rides away! </span>
              </p>
              <p>   
              <IoMdWalk/>
                <span> Go to Windsor Street from Uxbridge, turn left at the street to cross the dual carridgeway, walk to Whitehill Road before accessing Cleveland Road. </span>
              </p>
              <p>   
              <IoMdBicycle/>
                <span> Follow the signposts when arriving at Uxbridge, picking up our designated bikes on the way! :) </span>
              </p>
            </center>
          </div>
        </div>
  )
}

export default WhereWeAre