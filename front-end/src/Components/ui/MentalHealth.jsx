import React from 'react'
import "../../styles/MyTips.css"


function MentalHealth() {
  return (
    <div>
      <h2 className="myTips__subtitle">Mental Tips</h2>
      <ul className="myTips__list">
        <li>
          <span>1</span>Practice mindfulness meditation
        </li>
        <li>
          <span>2</span>Write in a journal daily
        </li>
        <li>
          <span>3</span>Get enough sleep
        </li>
        <li>
          <span>4</span>Exercise regularly
        </li>
        <li>
          <span>5</span>Engage in activities that bring joy and relaxation
        </li>
        <li>
          <span>6</span>Talk to a trusted friend or family member
        </li>
        <li>
          <span>7</span>Seek professional help from a therapist or counselor
        </li>
      </ul>
    </div>
  );
}

export default MentalHealth