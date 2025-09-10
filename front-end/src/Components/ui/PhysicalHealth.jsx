import React from 'react'
import "../../styles/MyTips.css";

function PhysicalHealth() {
  return (
    <div>
      <h2 className="myTips__subtitle">Physical Tips</h2>
      <ul className="myTips__list">
        <li>
        <span>1</span>
        Exercise regularly, aiming for 2 and a half hours of moderate cardio or 75 minutes of vigrious exercise per week. Consider joining Brunel Gym's program. 
          </li>
        <li>
        <span>2</span>
          Walk around campus to get exercise in as well as getting to know where classes are.
          </li>
        <li>
        <span>3</span>
          Stay hydrated by drinking the recommended amount of 15.5 cups (3.7 litres) for men and 11.5 cups (2.7 litres) for women.
          </li>
        <li>
        <span>4</span>
          Stretch before bed: bear hugs, neck stretches etc to relieve muscle tension and improve flexibility to walk to uni
          </li>
        <li>
        <span>5</span>
          Choose a sports activity from our many offered at 'Active@Brunel' to enjoy:  <a href="https://brunelstudents.com/activities/activeatbrunel/"> Sport Information </a>
          </li>
        <li>
        <span>6</span>
        If you are interested in sports, consider looking at the following course:  <a href="https://www.brunel.ac.uk/sport-health-and-exercise-sciences"> Sports, Health and Exercise Bsc </a>
        </li>
        <li>
        <span>7</span>
          Stay motivated to perform a exercise regime, if you have any issues, consider talking to Union of Brunel Students: <a href="https://brunelstudents.com/advice/unionadvice/"> Union </a>
          </li>
      </ul>
    </div>
  );
}

export default PhysicalHealth