import React, { useState } from "react";
import "../styles/MentalHealthQuiz.css";
import "../styles/ContactUs.css";
import { useOutletContext } from "react-router-dom";
import axios from "axios";

const questions = require("../Components/ui/questions");

function MentalHealthQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  var [score, setScore] = useState(0);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loggedInUser, setLoggedInUser] = useOutletContext();
  const [isSubmitted, setIsSubmitted] = useState("");
    const [errorMsg, setErrorMsg] = useState("");


  const resetQuiz = () => {
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
    setError(false);
  };

  const selection = (questionIndex, answerIndex) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: answerIndex });
  };
const validateScores = () => {
  let scoresValid = false;
  if (
    score = 0
  ) {
    alert("Please retake the quiz");
  } else if (isNaN(score)) {
    setErrorMsg({ name: "score", message: "your score was not saved" });
  } else {
    setErrorMsg("");
    scoresValid = true;
  }
  return scoresValid;
};
  const handleSubmit = (e) => {
    e.preventDefault();
    const unansweredQuestions = questions.filter(
      (question, index) => !selectedAnswers[index]
    );
    if (unansweredQuestions.length > 0) {
      setError(true);
    } else {
      setIsLoading(true);
      let totalScore = 0
      Object.values(selectedAnswers).forEach((answerIndex) => {
        totalScore += questions[answerIndex].answers[answerIndex].value;
      });
      setScore(totalScore);
      setTimeout(() => {
        setShowResults(true);
        setIsLoading(false);
        const scoresData = {
          email: loggedInUser,
          score: totalScore,
        };
        console.log(scoresData);
  console.log(score);
  console.log(totalScore);
  console.log(loggedInUser);


        if (validateScores()) {
          const jwt = sessionStorage.getItem("jwt");
          axios({
            credentials: "include",
            method: "post",
            url: "http://localhost:8080/QuizScores",
            data: scoresData,
            headers: { Authorization: `Bearer ${jwt}` },
          })
            .then((response) => {
              console.log(response);
              if (response.status === 200 || response.status === 201) {
                alert("Submitted successfully.");
                setIsSubmitted(true);
              } else {
                alert("Submission error!");
                setIsSubmitted("");
              }
            })
            .catch((error) => {
              alert("Submission error!");
              setIsSubmitted("");
              console.log(error);
            });
        }
      }, 2000);
    }
  };


  return (
    <div className="container quiz__container">
      <div className="row contact__row">
        <h2 className="register__title">Mental Health Quiz</h2>
        <form className="quiz__form">
          {!showResults && (
            <>
              {questions.map((question, questionIndex) => (
                <div key={questionIndex} className="quiz__question">
                  <h3 className="quiz__question-title">{question.question}</h3>
                  <ul className="quiz__answer-options">
                    {question.answers.map((answer, answerIndex) => (
                      <li key={answerIndex}>
                        <label className="quiz__answer-label">
                          <input
                            type="radio"
                            className="quiz__answer-input"
                            checked={
                              selectedAnswers[questionIndex] === answerIndex
                            }
                            onChange={() =>
                              selection(questionIndex, answerIndex)
                            }
                          />
                          <span className="quiz__answer-text">
                            {answer.text}
                          </span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {error && (
                <p className="quiz__error">
                  Please answer all questions before submitting.
                </p>
              )}
              <button
                className={`contact__button ${isLoading ? "loading" : ""}`}
                onClick={handleSubmit}
              >
                {isLoading ? "Loading..." : "Submit Quiz"}
              </button>
            </>
          )}
          {showResults && (
            <div className="quiz__results">
              <h2 className="quiz__results-title">Results</h2>
              <p className="quiz__results-score">Your score is: {score}</p>
              <p className="quiz__results-message">
                {score >= 12
                  ? "You may be experiencing symptoms of poor mental health. It's important to seek help from a mental health professional."
                  : "You seem to be doing well mentally. However, it's always important to take care of your mental health."}
              </p>
              <button className="contact__button" onClick={resetQuiz}>
                Retake Quiz
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default MentalHealthQuiz;
