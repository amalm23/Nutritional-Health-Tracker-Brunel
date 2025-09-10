import React from "react";
import { Link } from "react-router-dom";
import MentalHealth from "../assets/mental_health.jpeg";
import Tip from "./ui/Tip";

function Tips() {
  return (
    <div className="container">
      <div className="row">
        <ul className="tip__list">
          <li className="tips">
            <Link to="/myTips">
            <Tip image={MentalHealth} title="Physical" para="physical" />
            </Link>
            <Link to="/myTips">
            <Tip image={MentalHealth} title="Physical" para="physical" />
            </Link>
            <Link to="/myTips">
            <Tip image={MentalHealth} title="Physical" para="physical" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Tips;
