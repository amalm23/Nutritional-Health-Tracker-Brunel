import axios from "axios";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import {MdOutlineMail} from "react-icons/md";
import {RiLockPasswordLine} from "react-icons/ri";
import "../styles/Login.css";
import Captureproto from "../assets/Capture proto.PNG";

export default function Login(props) {
  const [errorMsg, setErrorMsg] = useState("");
  const [loggedInUser, setLoggedInUser] = useOutletContext();
  const [userData, setUserData] = useState("");
  const [isSubmitted, setIsSubmitted] = useState("");
  const [loading, setLoading] = useState(false);

  const [errorEmail,setErrorEmail]=useState(false);

  const email = useRef();
  const password = useRef();

  const error = {
    nullError: "Please insert all details",
    emailError: "Please type in a email",
    passwordError: "Please type in a password",
    emailWrongFormatError: "Please insert the email in the correct format",
  };

  const handleChnage =(props)=>{
    if(props.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      setErrorEmail(false)
    }else{
      setErrorEmail(true)
    }
}


  const validateForm = () => {
    let formValid = false;
    if (
      email.current.validity.valueMissing &&
      password.current.validity.valueMissing
    ) {
      alert("Please insert all details.");
    } else if (email.current.validity.typeMismatch) {
      setErrorMsg({ name: "email", message: error.emailWrongFormatError });
    } else if (email.current.validity.valueMissing) {
      setErrorMsg({ name: "email", message: error.emailError });
    } else if (password.current.validity.valueMissing) {
      setErrorMsg({ name: "password", message: error.passwordError });
    } else {
      formValid = true;
      // setisSubmitted(true);
    }
    return formValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setLoading(true);
    }, 10);
    if (validateForm()) {
      setErrorMsg("");
      setErrorEmail("");
      // const userData = dummydatabaseinfo.find((user) => user.email === email);

      const loginData = {
        username: email.current.value,
        password: password.current.value,
      };

      console.log(loginData);
      alert("Submitted successfully.");
      setIsSubmitted(true);

      // if (userData) {
      //     if (userData.password !== password) {
      //         setErrorMsg({name: "password", message: error.passwordError})
      //     }
      //     else if (repPassword !== password) {
      //         setErrorMsg({name: "repPassword", message: error.repPasswordError})
      //     }
      //     else {
      //         setisSubmitted(true);
      //         alert("Submitted successfully.");
      //     }
      // }
      //     else {
      //         setErrorMsg({name: "username", message: error.unameError})
      //     }

      axios({
        method: "post",
        url: "http://localhost:8080/login",
        data: loginData,
      })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            setIsSubmitted(true);
            setLoading(false);
            alert("Signed in successfully");
            const jwtToken = response.headers.authorization.split(" ")[1];
            if (jwtToken !== null) {
              sessionStorage.setItem("jwt", jwtToken);
              setLoggedInUser(email.current.value);
              setIsSubmitted(true);
              setLoading(false);
            } else {
              alert("Token failure!");
              setLoggedInUser("");
              setIsSubmitted(false);
            }
          } else {
            alert("Username or password not correct!");
            setLoggedInUser("");
            setIsSubmitted(false);
            setLoading(false);
          }
        })
        .then(() => {
          email.current.value = "";
          password.current.value = "";
        })
        .catch((error) => {
          alert("Login error!");
          setLoggedInUser("");
          setIsSubmitted(false);
          setLoading(false);
          console.log(error);
        });
    }
  };

  const logout = () => {
    sessionStorage.removeItem("jwt");
    setLoggedInUser("");
    setIsSubmitted(false);
    alert("You have been logged out successfully");
    setErrorMsg("");
    setErrorEmail("");
  };

  // const goToFormWithLoginData = () => (
  //     <NutrionalHealthForm props ={email}/>
  // );

  const errorMessageAppear = (name) =>
    name === errorMsg.name && (
      <div className="errorMessage">
        {" "}
        <font color="red">{errorMsg.message}</font>
      </div>
    );

    const showPassword = () => {
      var x = document.getElementById("password");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    }

  useEffect(() => {
    if (loggedInUser !== "") {
      const jwt = sessionStorage.getItem("jwt");
      console.log(jwt);
      axios({
        method: "get",
        url: "http://localhost:8080/user/findByEmail",
        params: { email: loggedInUser },
        headers: { Authorization: `Bearer ${jwt}` },
      })
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data);
            console.log(response.data.username);
            setUserData(response.data.username);
          }
        })
        .catch((err) => {
          console.log(err.response);
          setUserData("Data failure");
        });
    }
  }, [loggedInUser]);

  if (loggedInUser === "") {
    return (
      <div className="container_LoginContainer">
        <div className="row contact__row">
          <h2 className="contact__title">
            {" "}
            <center> Login </center>{" "}
          </h2>
          <div className="imageimage">
          <img src={Captureproto} alt="" className= "image"/> 
          </div>
          {/* <h4> <center> Select account type: </center> </h4>
            <div class = "accountbuttons">
                <div class = "button1">
                    <button class="btn-primary" type="submit">Student </button>
                </div>
                <div class = "button2">
                    <button class="btn-primary" type="submit">Admin </button>
            </div>
            </div> */}

          <form
            method="post"
            className="register__form"
            noValidate
            onSubmit={handleSubmit}
          >
            <h4> Please login before accessing the quiz and trackers, if you do not have a profile, register below :) </h4>
            <label className="register__label"> Email: </label>
            <span className="login_icons">
            <MdOutlineMail />
            </span>
            <span>
              <input
                className="register__input"
                type="text"
                id="email"
                name="email"
                required
                placeholder="E.g. 2039102@brunel.ac.uk"
                maxLength={21}
                ref={email}
                onChange={(e) => handleChnage(e.target.value)}
                />
            </span>
            {errorEmail ? (
                  <p className="erP" style={{ color: "red" }}>
                    Enter valid Email
                  </p>
                ) : (
                  ""
                )}
            {errorMessageAppear("email")}

            <br />
            <br />
            <label className="register__label">Password:</label>
            <span className="login_icons">
            <RiLockPasswordLine />
            </span>
            <span>
              <input
                className="register__input"
                type="password"
                id="password"
                name="password"
                required
                placeholder="E.g. lemon1234"
                minLength={8}
                ref={password}
              />
            </span>
            {errorMessageAppear("password")}

<span>
<label> Show Password:</label>
            <input type = "checkbox" onClick={showPassword}/>
            </span>
            <br />
            <br />

            <button
              className="login_button"
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging In..." : "Login"}
            </button>

            <br />
            <br />
            <br />

            <span className="lineforregister">
              <h3 className="register__title">
                {" "}
                <center> Not registered? </center>
              </h3>
              <Link className="line-for-register" to={"/register"}>
                <font color="blue">
                  {" "}
                  <b> Sign up here! </b>
                </font>
              </Link>
            </span>
            <br />
            <br />
            <br />

            {/* <span className="lineforregister">
              <h3 className="register__title">
                {" "}
                <center> Forgotten Password? </center>
              </h3>
              <Link className="line-for-register" to={"/forgotpassword"}>
                <font color="blue">
                  {" "}
                  <b> Reset it here! </b>
                </font>
              </Link>
            </span> */}
            <br />
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="app2">
        <div className="loginForm2">
          <h1>
            {" "}
            <center>STUDENT QUIZZES AND FORMS </center>
          </h1>
          <h2> Welcome {userData} ! </h2>
          <h3> Select from the following to start your healthy journey: </h3>
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
             <b>Thought Diary Table </b> 
              </font>
            </Link>
              <Link className="nav__link " to={"/showPastNutrionalRecords"}>
                {" "}
                <font size="+2">
                  <b> Nutrional Health Table </b>
                </font>
              </Link>
              <Link className="nav__link" to={"/nutrionalhealthform"}>
                {" "}
                <font size="+2">
                  <b> Nutrional Health Tracker </b>
                </font>
              </Link>
              <h3>
                {" "}
                  {" "}
                  <font size="+2">
                    {" "}
                    <button className="btn" onClick={logout}>Logout </button>
                  </font>
              </h3>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  //    const dummydatabaseinfo = [
  //     {
  //     email: "2005907@brunel.ac.uk",
  //     password: "ilovechips123",
  //     },
  //     {
  //     email: "2005907@brunel.ac.uk",
  //     password: "ilovechips",
  //     }
  //    ]

  // return (
  //     <div className="app2">
  //         <div className = "loginForm2">
  //             {isSubmitted ? <div>
  //             <h1> <center>STUDENT QUIZZES AND FORMS </center></h1>
  //             <h3> <a href= "/mentalhealthquiz"> <font color = "blue"> <center>Mental Health Quiz</center> </font></a></h3>
  //             <h3> <a href= "/physicalhealthtracker"> <font color = "blue"> <center>Physical Health Tracker</center> </font></a></h3>
  //             <h3> <a href= "/nutrionalhealthform"> <font color = "blue"> <center>Nutrional Health Tracker</center> </font> </a></h3>
  //             <h3> <a onClick={logout}> <font color = "blue"> <center>Logout</center> </font> </a></h3>
  //             </div> : renderErrorForm}
  //         </div>
  //     </div>
  // );
}
