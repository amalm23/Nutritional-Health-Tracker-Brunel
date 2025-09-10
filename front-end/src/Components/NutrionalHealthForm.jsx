import axios from "axios";
import { useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import {GiHamburger} from "react-icons/gi";
import {AiFillFire} from "react-icons/ai";
import {FaShoppingBasket} from "react-icons/fa";
import {BiDrink} from "react-icons/bi";
import {BiTime} from "react-icons/bi";
import {TbSunMoon} from "react-icons/tb";
import Home from "../pages/Home";
import Captureproto from '../assets/p1bm5844cb6oacnd1std183s12gt6.jpg.optimal.jpg';

export default function NutrionalHealthForm() {
    
const getInitialState = () => {
  const value = "Breakfast";
  return value;
}
const [loading, setLoading] = useState(false);
  const [valueDropDown, setValueDropDown] = useState(getInitialState);
    const [errorMsg, setErrorMsg] = useState('');
    const [loggedInUser, setLoggedInUser] = useOutletContext();
    const [isSubmitted, setIsSubmitted] = useState('');
    const [foodNameError, setFoodNameError] = useState(false);
    const [drinkNameError, setDrinkNameError] = useState(false);
    const date = useRef();
    const foodName = useRef();
    const calories = useRef();
    const consumption = useRef(); 
    const drinkName = useRef();
    const drinkCalories = useRef();
    const drinkConsumption = useRef();
    const timeOfConsumption = useRef();

    console.log(loggedInUser);

        const error = {
        dateError: "Please insert a date",
        foodnError : "Please type in a food name",
        caloriesError: "Please select/type in calories",
        caloriesFormattingError: "Please insert calories as a number",
        consumptionError: "Please select/type how much consumed",
        drinkNameError: "Please type in the drink name",
        drinkCaloriesError: "Please select/type in the drink calories",
        drinkCaloriesFormattingError: "Please insert calories as a number",
        drinkConsumptionError: "Please select/type how much drink consumed",
        timeOfConsumptionError: "Please select a time"
       }

       const handleDropDownFormChange = (e) => {
        setValueDropDown(e.target.value);
       }

       const validateForm = () => {
        let formValid = false;
        if (date.current.validity.valueMissing &&
            foodName.current.validity.valueMissing && calories.current.validity.valueMissing 
            && consumption.current.validity.valueMissing && drinkName.current.validity.valueMissing 
            && drinkConsumption.current.validity.valueMissing && timeOfConsumption.current.validity.valueMissing) {
            alert("Please insert all details.");
        }
        else if (isNaN(calories.current.value)){
            setErrorMsg({name: "calories", message: error.caloriesFormattingError})
        }
        else if (isNaN(drinkCalories.current.value)){
            setErrorMsg({name: "drinkCalories", message: error.drinkCaloriesFormattingError})
        }
                else if (foodName.current.validity.valueMissing) {
                    setErrorMsg({name: "foodName", message: error.foodnError})
                }
                else if (calories.current.validity.valueMissing) {
                    setErrorMsg({name: "calories", message: error.caloriesError})
                }
                else if (consumption.current.validity.valueMissing) {
                    setErrorMsg({name: "consumption", message: error.consumptionError})
                }
                else if (drinkName.current.validity.valueMissing) {
                    setErrorMsg({name: "drinkName", message: error.drinkNameError})
                }
                else if (drinkCalories.current.validity.valueMissing) {
                    setErrorMsg({name: "drinkCalories", message: error.drinkCaloriesError})
                }
                else if (drinkConsumption.current.validity.valueMissing) {
                    setErrorMsg({name: "drinkConsumption", message: error.drinkConsumptionError})
                }
                else if (timeOfConsumption.current.validity.valueMissing) {
                    setErrorMsg({name: "timeOfConsumption", message: error.timeOfConsumptionError})
                }
       else{
        setErrorMsg('');
        formValid = true;
        }
        return formValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          alert("Submitted successfully.");
            const formData = {
                email : loggedInUser,
                dateOfConsumption: date.current.value,
                foodName: foodName.current.value,
                calories: calories.current.value,
                consumption: consumption.current.value,
                drinkName: drinkName.current.value,
                drinkCalories: drinkCalories.current.value,
                drinkConsumption: drinkConsumption.current.value,
                timeOfDay: valueDropDown,
                timeOfConsumption: timeOfConsumption.current.value
            }
            if (formData.dateOfConsumption === "" || formData.dateOfConsumption == null) {
                alert("Date not found, type in again!")
                setIsSubmitted(false);
                return;
            }
            const jwt = sessionStorage.getItem('jwt');
            console.log(formData);
            axios({
                credentials: 'include',
                method: 'post',
                url: 'http://localhost:8080/nutrionalForm',
                data: formData,
                headers: {"Authorization" : `Bearer ${jwt}`}
             })
             .then(response=>{
                console.log(response);
                if (response.status === 200 || 201){
                    alert("Saved successfully!")
                    setIsSubmitted(true);
                }else{
                    alert("Saving error!")
                    setIsSubmitted("");
                }
            }).then(()=>{
              formData.dateOfConsumption = "";
              foodName.current.value = "";
              calories.current.value = "";
              consumption.current.value = "";
              drinkName.current.value = "";
              drinkCalories.current.value = "";
              drinkConsumption.current.value = ""; 
              timeOfConsumption.current.value = ""
            })
            .catch(error=>{
                alert("Saving error!")
                setIsSubmitted("");
                console.log(error);
            })
            
        }
        }

        const handleSubmitWithOther = (e) => {
            e.preventDefault();
            if (validateForm()) {
              alert("Submitted successfully!");
              const formData = {
                  email : loggedInUser,
                  dateOfConsumption: date.current.value,
                  foodName: foodName.current.value,
                  calories: calories.current.value,
                  consumption: consumption.current.value,
                  drinkName: drinkName.current.value,
                  drinkCalories: drinkCalories.current.value,
                  drinkConsumption: drinkConsumption.current.value,
                  timeOfDay: valueDropDown,
                  timeOfConsumption: timeOfConsumption.current.value
              }
              if (formData.dateOfConsumption === "" || formData.dateOfConsumption == null) {
                  alert("Date not found, type in again")
                  setIsSubmitted(false);
                  return;
              }
              const jwt = sessionStorage.getItem('jwt');
              console.log(formData);
              axios({
                  credentials: 'include',
                  method: 'post',
                  url: 'http://localhost:8080/nutrionalForm',
                  data: formData,
                  headers: {"Authorization" : `Bearer ${jwt}`}
               })
               .then(response=>{
                  console.log(response);
                  if (response.status === 200 || 201){
                      alert("Saved successfully!")
                      setIsSubmitted("");
                  }else{
                      alert("Saving error!")
                      setIsSubmitted("");
                  }
              }).then(()=>{
                formData.dateOfConsumption = "";
                foodName.current.value = "";
                calories.current.value = "";
                consumption.current.value = "";
                drinkName.current.value = "";
                drinkCalories.current.value = "";
                drinkConsumption.current.value = ""; 
                timeOfConsumption.current.value = ""
              })
              .catch(error=>{
                  alert("Saving error!")
                  setIsSubmitted("");
                  console.log(error);
              })
              
          }
            }

   
            const errorMessageAppear = (name) => (
              name === errorMsg.name && (
                  <div className = "nutrionalForm_error"> <font color = "red">{errorMsg.message}</font></div>
              )
          )

          const handleFoodChange = (props) => {
            if (props.match(/^(?=.*[0-9])(?=.*[a-zA-Z])/)) {
              setFoodNameError(true);
            } else {
              setFoodNameError(false);
            }
          };

          const handleDrinkName = (props) => {
            if (props.match(/^(?=.*[0-9])(?=.*[a-zA-Z])/)) {
              setDrinkNameError(true);
            } else {
              setDrinkNameError(false);
            }
          };

        const renderNutrionForm = (
          <div className="nutrionForm_container">
            <div className="row contact__row">
              <h1 className="register__title">
                {" "}
                <center> Nutritional Health Form </center>{" "}
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
                method="post"
                className="register__form"
                noValidate
                onSubmit={handleSubmit}
              >
                <label className="register__label"> Date of Consumption:</label>
                <input
                  className="register__input"
                  type="date"
                  id="dateConsumed"
                  name="date"
                  required
                  ref={date}
                />
                {errorMessageAppear("date")}


                <label className="register__label"> Name of Food:</label>
                <span className="login_icons">
                <GiHamburger/>
                </span>
                <span>
                <input
                  className="register__input"
                  type="text"
                  id="foodName"
                  name="foodName"
                  required
                  maxLength={30}
                  placeholder="E.g Apple"
                  ref={foodName}
                  onChange={(e) => handleFoodChange(e.target.value)}
                /></span>
                {foodNameError ? (
                  <p className="erP" style={{ color: "red" }}>
                    Enter valid Food Name
                  </p>
                ) : (
                  ""
                )}
                {errorMessageAppear("foodName")}

                <label className="register__label"> Calories Intake:</label>
                <span className="login_icons">
                <AiFillFire/>
                </span>
                <input
                  className="register__input"
                  type="number"
                  id="calories"
                  name="calories"
                  required
                  placeholder="E.g. 200 kcal"
                  ref={calories}
                />
                {errorMessageAppear("calories")}

                <label className="register__label"> How many eaten?:</label>
                <span className="login_icons">
                <FaShoppingBasket/>
                </span>
                <input
                  className="register__input"
                  type="number"
                  id="consumption"
                  name="consumption"
                  required
                  placeholder="E.g. 1 apple"
                  ref={consumption}
                />
                {errorMessageAppear("consumption")}

                <label className="register__label"> Name of Drink:</label>
                <span className="login_icons">
                <BiDrink/>
                </span>
                <input
                  className="register__input"
                  type="text"
                  id="drinkName"
                  name="drinkName"
                  required
                  maxLength={30}
                  placeholder="E.g Water"
                  ref={drinkName}
                  onChange={(e) => handleDrinkName(e.target.value)}
                />
                {drinkNameError ? (
                  <p className="erP" style={{ color: "red" }}>
                    Enter valid Drink Name
                  </p>
                ) : (
                  ""
                )}
                {errorMessageAppear("drinkName")}

                <label className="register__label"> Calories Intake:</label>
                <span className="login_icons">
                <AiFillFire/>
                </span>
                <input
                  className="register__input"
                  type="number"
                  id="drinkCalories"
                  name="drinkCalories"
                  required
                  placeholder="E.g. 200"
                  ref={drinkCalories}
                />
                {errorMessageAppear("drinkCalories")}

                <label className="register__label"> How many drunk?:</label>
                <span className="login_icons">
                <FaShoppingBasket/>
                </span>
                <input
                  className="register__input"
                  type="number"
                  id="drinkConsumption"
                  name="drinkConsumption"
                  required
                  placeholder="E.g. 0.5 of a glass"
                  ref={drinkConsumption}
                />
                {errorMessageAppear("drinkConsumption")}

                <label className="register__label">
                  {" "}
                  What time of day was this?:
                </label>
                <span className="login_icons">
                <TbSunMoon/>
                </span>
                <select value={valueDropDown} onChange={handleDropDownFormChange}>
                  <option value="Breakfast"> Breakfast</option>
                  <option value="Lunch"> Lunch</option>
                  <option value="Dinner"> Dinner </option>
                  <option value="Snack"> Snack </option>
                  <option value="Other"> Other </option>
                </select>
                {/* <input
                  className="register__input" type="text" id="calories" name="calories" required placeholder="E.g. Breakfast" value = {nutrionForm.timeOfDay} onChange = {(e) => onUpdateField(e, 'timeOfDay')}/> */}
                {/* {renderErrorMessage("repPassword")} */}

                <label className="register__label">
                  {" "}
                  What time was this consumed?:
                </label>
                <input
                  className="register__input"
                  type="time"
                  id="timeOfConsumption"
                  name="timeOfConsumption"
                  required
                  placeholder="E.g. 0.5 of a glass"
                  ref={timeOfConsumption}
                />
                {errorMessageAppear("timeOfConsumption")}

                <div className="button-container">
                  <button className="contact__button" type="submit">
                    {" "}
                    Submit{" "}
                  </button>
                  <button
                    className="contact__button"
                    type="submit"
                    onClick={handleSubmitWithOther}
                  >
                    {" "}
                    Submit and Add another response{" "}
                  </button>
                  <button className="contact__button" type="reset">
                    {" "}
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        );


        const fillAnother = () => {
            setIsSubmitted(false);
        }

if (loggedInUser !== "") {
    return (
        <div className="app2">
        <div className = "loginForm2">
            {isSubmitted ? <div>  
            <h1> <center>Thank you for submitting! What next? </center></h1> 
          <div className="nav__container">
            <ul className="nav__list">
              <Link className="nav__link" to={"/physicalhealthtracker"}>
                {" "}
                <font size="+2">
                  <b>Physical Health Tracker </b>
                </font>
              </Link>
              <Link className="nav__link" to={"/mentalhealthquiz"}>
                {" "}
                <font size="+2">
                  <b>Mental Health Quiz </b>
                </font>
              </Link>
              <Link className="nav__link " to={"/editprofile"}>
                {" "}
                <font size="+2">
                  <b> Edit Profile </b>
                </font>
              </Link>
              <Link className="nav__link" to={"/thoughtdiary"}>
                {" "}
                <font size="+2">
                  <b> Thought Diary </b>
                </font>
              </Link>
              <Link className="nav__link" to={"/bmitracker"}>
                {" "}
                <font size="+2">
                  <b> Nutrional/Physical BMI Tracker </b>
                </font>
              </Link>
            <Link to={'/thoughttable'} className="nav__link">
            {" "}
          <font size="+2">
          <b> Thought Diary Table </b>
            </font>
            </Link>
              <Link className="nav__link " to={"/showPastNutrionalRecords"}>
                {" "}
                <font size="+2">
                  <b> Nutrional Health Table </b>
                </font>
              </Link>
              <Link className="nav__link" onClick= {fillAnother} to={"/nutrionalhealthform"}>
                {" "}
                <font size="+2">
                  <b> Nutrional Health Tracker </b>
                </font>
              </Link>
              {" "}
              <li className="nav__list">
            <Link to={'/login'} className="nav__link">
                <button className = "btn"> Logout </button>
            </Link>
          </li>
            </ul>
          </div>
            </div> : renderNutrionForm}
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