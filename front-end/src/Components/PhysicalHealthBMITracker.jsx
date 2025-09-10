
import { useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import {GrNote} from "react-icons/gr";
import Captureproto from '../assets/BMI-Chart.gif';
import Home from "../pages/Home";

export default function PhysicalHealthBMITracker() {
    
    const [bmiMessage, setBMIMessage] = useState('');
    const [loggedInUser, setLoggedInUser] = useOutletContext();
    const [isSubmitted, setIsSubmitted] = useState('');
    const weight = useRef();
    const height = useRef();
    const [finalBMI, setFinalBMI] = useState('');
  
    const [errorMessage, setErrorMsg] = useState('');

     console.log(loggedInUser);

        const messageBMI = {
        underWeightMessage: "You are UNDERWEIGHT, consider going to a doctor and eat more, take care of your health!",
        healthyWeightMessage: "You are HEALTHY, well done! Continue what works for you :).",
        overWeightMessage: "You are OVERWEIGHT, please consider reducing intake and exercising more.",
        obseseMessage: "You are OBSESE, be careful, consider going to a doctor.",
        severlyObseseMessage: "You are SEVERLY OBSESE, go to a doctor or healthcare provider to assess health and prescribe treatment if need be.",
       }

       const validateForm = () => {
        let formValid = false;
        if (weight.current.validity.valueMissing &&
            height.current.validity.valueMissing) {
            alert("Please insert all details.");
        }
       else {
        formValid = true;
        }
        return formValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
        console.log(height.current.value);
        console.log(weight.current.value);
        const meters = (height.current.value / 100)
        const bmiCalculation = weight.current.value / (meters * meters);
        console.log(bmiCalculation);
        const bmi = bmiCalculation.toFixed(4);
        setFinalBMI(bmi);
      if (weight.current.validity.valueMissing ){
         alert("Please insert weight");
         setIsSubmitted(false);
      }
      if (height.current.validity.valueMissing){
        alert("Please insert height");
        setIsSubmitted(false);
      }
        setIsSubmitted(true);
      }
    }

            const bmiMessageAppear = (name) => (
              name === bmiMessage.name && (
                  <div className = "nutrionalForm_error"> <font color = "red">{messageBMI.message}</font></div>
              )
          )

if (loggedInUser !== "") {
    return (
            <div>  
            <div className="container">
            <div className="row contact__row">
              {/* <img src = {font_rend} alt = "Brunel Pal Logo" />  */}
              <h1 className="register__title">
                {" "}
                <center> BMI Tracker </center>{" "}
              </h1>
              <div className="imageimage">
          <img src={Captureproto} alt="" className= "image"/> 
          </div>
              <h2>
                {" "}
                Remember to check all responses before clicking on the Submit
                Button!{" "}
              </h2>
              <form
                className="register__form"
                noValidate
                onSubmit={handleSubmit}
              >
                <label className="register__label"> Height (in cm):</label>
                <input
                  className="register__input"
                  type="number"
                  id="height"
                  name="height"
                  required
                  maxLength={20}
                  ref={height}
                />
                {/* {errorMessageAppear("date")} */}


                <label className="register__label"> Weight (in kg):</label>
                <GrNote/>
                <span>
                <input
                  className="register__input"
                  type="number"
                  id="weight"
                  maxLength={20}
                  name="weight"
                  required
                  ref={weight}
                /></span>
                {/* {errorMessageAppear("foodName")} */}

                <div className="button-container">
                   <button className="contact__button" type="submit">
                     {" "}
                     Submit{" "}
                   </button>
                   <button className="contact__button" type="reset">
                    {" "}
                    Reset
                  </button>
    </div>

                </form>
        {isSubmitted && (
        <div className="quiz__results">
          <h2>Results</h2>
          <p>Your BMI is: {finalBMI}</p>
          <p>
            {(finalBMI < 18.5)
              ?  "You are UNDERWEIGHT, consider going to a doctor and eat more, take care of your health!"
              : "Check other."}
          </p>
          <p>
            {(finalBMI >= 18.5) || (finalBMI <=24.9)
              ? "You are HEALTHY, well done! Continue what works for you :)." :
              "Check other."}
          </p>
          <p>
            {(finalBMI >= 25.0) || (finalBMI <=29.9)
              ? "You are OVERWEIGHT, please consider reducing intake and exercising more." :
              "Check other."}
              {(finalBMI >= 30 && finalBMI <= 39.9)
              ? "You are OBSESE, be careful, consider going to a doctor." :
              "Check other."}
          
              {(finalBMI >= 40) 
        ? "You are SEVERLY OBSESE, go to a doctor or healthcare provider to assess health and prescribe treatment if need be." :
         "Check other."}
              
          </p>
        </div>
      )}
            </div>
        </div>
    </div>
    );
        }
          if (loggedInUser === "") {
            return (
              <Home></Home>
            )
          }
        }
    