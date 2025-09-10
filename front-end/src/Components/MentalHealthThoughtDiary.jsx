import axios from "axios";
import { useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import {GrNote} from "react-icons/gr";
import named from "../assets/unnamed.png";
import Home from "../pages/Home";


export default function MentalHealthThoughtDiary() {
    
    const [loggedInUser, setLoggedInUser] = useOutletContext();
    const [isSubmitted, setIsSubmitted] = useState('');
    const thought = useRef();
  
    console.log(loggedInUser);

    const [thoughtWrongFormat, setThoughtWrongFormat] = useState('');

    console.log(loggedInUser);

    const handleThoughtChange = (props) => {
     if (props.match(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[0-9])/)) {
       setThoughtWrongFormat(false);
     } else {
       setThoughtWrongFormat(true);
     }
   };

        const error = {
            thoughtFormattingError : "Please type your thought like this: 12th March: I love exams."
       }

       const validateForm = () => {
        let formValid = false;
        console.log(thought.current.value);
        if (thought.current.value) {
            formValid = true;
        }
       else{
        alert("Please insert a thought");
        formValid = false;
        }
        return formValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const formData = {
                email : loggedInUser,
                thought : thought.current.value
            }
            const jwt = sessionStorage.getItem('jwt');
            axios({
                credentials: 'include',
                method: 'post',
                url: 'http://localhost:8080/addThought',
                data: formData,
                headers: {"Authorization" : `Bearer ${jwt}`}
             })
             .then(response=>{
                console.log(response);
                if (response.status === 200 || 201){
                    alert("Submitted successfully.")
                    setIsSubmitted(true);
                }else{
                    alert("Submission error!")
                    setIsSubmitted("");
                }
            }).then(()=>{
              thought.current.value = ""
            })
            .catch(error=>{
                alert("Submission error!")
                setIsSubmitted("");
                console.log(error);
            })
            
         }
        }

   
            const errorMessageAppear = (name) => (
              name === error.name && (
                  <div className = "errorMessage"> <font color = "red">{error.message}</font></div>
              )
          )
  if (loggedInUser !== "") {
    return (
            <div>  
            <div className="container">
            <div className="row contact__row">
              <h1 className="register__title">
                {" "}
                <center> Thought Diary </center>{" "}
              </h1>
              <div className="imageimage">
              <img src = {named} alt = "Brunel Pal Logo" /> 
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
                <label className="register__label"> Thought:</label>
                <span className="login_icons">
                <GrNote/>
                </span>
                <span>
                <textarea
                  className="register__input"
                  type="text"
                  id="thought"
                  name="thought"
                  ref={thought}
                  onChange={(e) => handleThoughtChange(e.target.value)}
                />
                </span>
                

{thoughtWrongFormat ? (
            <p className="er" style={{ color: "red" }}>
              Please type your thought as text, like this: 12th March: I love chips.
            </p>
          ) : (
            ""
          )}
                {errorMessageAppear("thought")}

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