import React, { useRef } from "react";
import { useState } from "react";
import axios from "axios";
import "../styles/Registration.css";
import { Link } from "react-router-dom";

export default function Registration() {
  const firstname = useRef();
  const lastname = useRef();
  const birthday = useRef();
  const email = useRef();
  const username = useRef();
  const password = useRef();
  const repPassword = useRef();

  const [error, setError] = useState(false);
  const [UserNameError, setUserNameError] = useState(false);

  const validateForm = () => {
    let formValid = false;

    if (
      firstname.current.validity.valueMissing ||
      lastname.current.validity.valueMissing ||
      birthday.current.validity.valueMissing ||
      email.current.validity.valueMissing ||
      username.current.validity.valueMissing ||
      password.current.validity.valueMissing ||
      repPassword.current.validity.valueMissing
    ) {
      alert("Please fill in all text fields.");
    } else if (email.current.validity.typeMismatch) {
      alert("Invalid e-mail address. Please enter your e-mail again.");
    } else if (password.current.validity.tooShort) {
      alert("Password is too short. Please select another password");
    } else if (password.current.value !== repPassword.current.value) {
      alert("Passwords do not match. Please try again");
    } else {
      formValid = true;
    }
    return formValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      axios
        .post("/user", {
          firstname: firstname.current.value,
          lastname: lastname.current.value,
          birthday: birthday.current.value,
          email: email.current.value,
          username: username.current.value,
          password: password.current.value,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            alert("Registered Successfully");
          }
        })
        .then(() => {
          firstname.current.value = "";
          lastname.current.value = "";
          birthday.current.value = "";
          email.current.value = "";
          username.current.value = "";
          password.current.value = "";
          repPassword.current.value = "";
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  const handleChnage = (props) => {
    if (props.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleUsernameChnage = (props) => {
    if (props.match(/^(?=.*[a-zA-Z])(?=.*[0-9])/)) {
      setUserNameError(false);
    } else {
      setUserNameError(true);
    }
  };
  return (
    <div className="register__container">
      <div className="row contact__row">
        <h1 className="register__title">Create an Account</h1>

        <form className="register__form" noValidate onSubmit={handleSubmit}>
          <label className="register__label">First Name :</label>
          <input
            className="register__input"
            type="text"
            placeholder="Enter your First Name"
            ref={firstname}
            required
          />

          <label className="register__label">Last Name :</label>
          <input
            className="register__input"
            type="text"
            placeholder="Enter your Last Name"
            ref={lastname}
            required
          />
        

          <label className="register__label">Birthday :</label>
          <input
            className="register__input"
            type="date"
            ref={birthday}
            name="birthday"
            required
          />
       

          <label className="register__label">Email :</label>
          <input
            className="register__input"
            type="email"
            placeholder="Enter your Email"
            ref={email}
            name="email"
            required
            onChange={(e) => handleChnage(e.target.value)}
          />
       
          {error ? (
            <p className="erP" style={{ color: "red" }}>
              Enter valid Email
            </p>
          ) : (
            ""
          )}
      

          <label className="register__label">Username :</label>
          <input
            className="register__input"
            type="text"
            placeholder="Enter a Username"
            ref={username}
            required
            onChange={(e) => handleUsernameChnage(e.target.value)}
          />
        
          {UserNameError ? (
            <p className="er" style={{ color: "red" }}>
              Enter valid username. Your username should contain alpha numeric characters like abc123 or 123abc.
            </p>
          ) : (
            ""
          )}

          <label className="register__label">Password :</label>
          <input
            className="register__input"
            type="password"
            placeholder="Enter a Password (Minimum 8 Characters)"
            ref={password}
            name="password"
            required
            minLength="8"
          />
      

          <label className="register__label">Re-type password :</label>
          <input
            className="register__input"
            type="password"
            placeholder="Re-Enter your Password"
            ref={repPassword}
            name="repPassword"
            required
          />

          <br />
          <br />
          <button className="register__button" type="submit">
            Submit
          </button>
          <br />
          <br />
          <br />
          <label className="nav__list">Already Have an Account?</label>
          <br />

          <Link to={"/login"} className="nav__list">
            Click Here
          </Link>
        
        </form>
      </div>
    </div>
  );
}
