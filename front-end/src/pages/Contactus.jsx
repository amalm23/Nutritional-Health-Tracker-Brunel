import React from "react";
import { useState } from "react";
import axios from "axios";
import "../styles/ContactUs.css";


function Contactus() {
const [query, setQuery] = useState({ firstname: '', text: '' , email: ''});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setTimeout(() => {
      setLoading(true);
    }, 1000);
    try {
      await axios.post("http://localhost:8080/Queries", query);
            setLoading(false);

      alert("Query submitted successfully!");
      setQuery({ firstname: "", email: "", text: "" });
    } catch (error) {
      setError("Failed to submit query!");
      setLoading(false);
    }
  };

  return (

      <div className="container">
        <div className="row contact__row">
          <h2 className="contact__title">Contact Us</h2>
          <form className="contact__form" onSubmit={handleSubmit}>
            <p>Anything you would like to say!</p>
            <p>
              {" "}
              Feel free to tell us below
            </p>
            <div className="form-group">
              <label htmlFor="firstname" className="contact__label">
                First Name:
              </label>
              <input
                className="contact__input"
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Write your name here.."
                value={query.firstname}
                onChange={(event) =>
                  setQuery({ ...query, firstname: event.target.value })
                }
                required
              />

              <label className="contact__label" htmlFor="email">
                Email:
              </label>
              <input
                className="contact__input"
                type="email"
                id="email"
                name="email"
                placeholder="Let us know how to contact you back.."
                value={query.email}
                onChange={(event) =>
                  setQuery({ ...query, email: event.target.value })
                }
                required
              />

              <label className="contact__label" htmlFor="text">
                Query:
              </label>
              <textarea
                className="contact__input"
                id="text"
                name="text"
                placeholder="What would you like to tell us.."
                value={query.text}
                onChange={(event) =>
                  setQuery({ ...query, text: event.target.value })
                }
                required
              />

              <button
                className="contact__button"
                type="submit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
          {error && <p className="error">{error}</p>}
        </div>
      </div>

  );
}

export default Contactus;