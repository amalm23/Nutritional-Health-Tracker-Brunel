import axios from "axios";
import React, {useRef} from "react";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import {Link} from "react-router-dom"
import font_rend from "../assets/Brunel PAL Title thing.PNG";

export default function ForgottenPassword () {

    const email = useRef();
    const password = useRef();
    const repeatPassword = useRef();

    const [isSubmitted, setIsSubmitted] = useState(false);

    const [id, setID] = useState(null);

    const [data, setData] = useState([]);
    const [userData, setUserData] = useState([]); 

    const submitForm = (e) => {
      e.preventDefault();
      
      const email2 = email.current.value;


      console.log(email2);

      axios({
        method: 'post',
        url: "http://localhost:8080/user/forgottenPasswordGetByEmail",
        params: { email: email2 },
      })
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data);
            // data.push(response.data);
            setData(response.data);
            setID(response.data.id);
            console.log(id);
            console.log(data);
            console.log(data.id);
            setIsSubmitted(true);
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    }

    const renderNutrionForm = (
      <div className="container">
<div className="row contact__row">
  <h1 className="register__title">
    {" "}
    Forgotten your password? No worries!{" "}
  </h1>
  <h2> Just type your email below: </h2>
  <form method="post" className="register__form" noValidate onSubmit={submitForm}>

      <div>
        <label className="register__label"> Email: </label>
        <input
        className="register__input"
          type="text"
          id="email"
          name="email"
          required
          placeholder="E.g. 2039102@brunel.ac.uk"
          maxLength={20}
          ref={email}
        />
        {/* {errorMessageAppear("email")} */}

      <br></br>
      <button className="contact__button"> Check your Email </button>
      <br></br>
    </div>
  </form>
  </div>
  </div>
    );

    const resetPassword = (e, formResponseid) => {
      e.preventDefault();
      
      const password2 = password.current.value;

      const newData = [...userData];
      const i = userData.findIndex((formResponse) => formResponse.id === formResponseid)
      const idGet = newData[i];
      console.log(idGet);
      const id = idGet.id;
      const email = idGet.email;
      console.log(id);
      console.log(email);

      const getID = userData.id;
      
      console.log(getID);

      console.log(password2);

      axios({
        method: 'post',
        url: "http://localhost:8080/user/editPassword",
        params: { email: password2 },
      })
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data);
            setIsSubmitted(true);
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    }

return (
  <div className="container">
  {isSubmitted ? <div className="row contact__row">
    <h2>Change Password </h2>
    <form method="post" className="register__form" noValidate onSubmit={resetPassword}>
        <label className="register__label"> New Password: </label>
        <div>
        <input
        className="register__input"
          type="password"
          id="password"
          name="password"
          required
          placeholder="E.g. 2039102@brunel.ac.uk"
          maxLength={20}
          ref={password}
        />
        </div>
        <div>
        <label className="register__label"> Repeat Password: </label>
        <input
        className="register__input"
          type="password"
          id="repPassword"
          name="repPassword"
          required
          placeholder="E.g. 2039102@brunel.ac.uk"
          maxLength={20}
          ref={repeatPassword}
        />
        </div>
        <br></br>
      <button className="contact__button"> Reset Password </button>
      <br></br>
        </form>
  </div>: renderNutrionForm}
    </div>
)
}
 
  
//   {isSubmitted && (
//   <div className="quiz__results">
//     <h2>Change Password </h2>
//     <div>
//         <label className="register__label"> New Password: </label>
//         <input
//         className="register__input"
//           type="text"
//           id="password"
//           name="password"
//           required
//           placeholder="E.g. 2039102@brunel.ac.uk"
//           maxLength={20}
//           ref={password}
//         />
//       </div>
//       <div>
//         <label className="register__label"> Repeat Password: </label>
//         <input
//         className="register__input"
//           type="text"
//           id="password"
//           name="repPassword"
//           required
//           placeholder="E.g. 2039102@brunel.ac.uk"
//           maxLength={20}
//           ref={repeatPassword}
//         />
//       </div>
//   </div>
// )}
