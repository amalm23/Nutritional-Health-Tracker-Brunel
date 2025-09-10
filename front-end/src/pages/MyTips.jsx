import React, { useState } from "react";
import MentalHealth from "../Components/ui/MentalHealth";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import PhysicalHealth from "../Components/ui/PhysicalHealth";
import NutritionalHealth from "../Components/ui/NutritionalHealth";
import "../styles/MyTips.css"

export default function MyTips() {
  const [section, setSection] = useState("mental");

  const handlePrev = () => {
    if (section === "mental") {
      setSection("nutritional");
    } else if (section === "physical") {
      setSection("mental");
    } else {
      setSection("physical");
    }
  };

  const handleNext = () => {
    if (section === "mental") {
      setSection("physical");
    } else if (section === "physical") {
      setSection("nutritional");
    } else {
      setSection("mental");
    }
  };

  return (
    <div className="myTips">
      <h1 className="register__title">myTips</h1>
      <div className="myTips__container">
        <div className="myTips__arrows">
          <BsFillArrowRightSquareFill
            className="myTips__arrow"
            onClick={handleNext}
          />
          <div className="myTips__section">
            {section === "mental" && <MentalHealth />}
            {section === "physical" && <PhysicalHealth />}
            {section === "nutritional" && <NutritionalHealth />}
          </div>
        </div>

        <BsFillArrowLeftSquareFill
          className="myTips__arrow"
          onClick={handlePrev}
        />
      </div>
    </div>
  );
}
