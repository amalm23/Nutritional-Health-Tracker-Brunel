// import React, { useState } from "react";
// import { useOutletContext } from "react-router-dom";
// import axios from "axios";


// function ExerciseTracker() {
//   const [date, setDate] = useState("");
//   const [email, setEmail] = useState("");
//   const [exerciseTimes, setExerciseTimes] = useState([]);
//   const [exerciseNames, setExerciseNames] = useState([]);
//   const [loggedInUser, setLoggedInUser] = useOutletContext();


//   const handleAddExercise = () => {
//     const newExercise = {
//       exerciseTime: "",
//       exerciseName: "",
//     };
//     setExerciseTimes([...exerciseTimes, newExercise]);
//     setExerciseNames([...exerciseNames, newExercise]);
//   };

//   const handleExerciseTimeChange = (index, event) => {
//     const updatedExerciseTimes = [...exerciseTimes];
//     updatedExerciseTimes[index].exerciseTime = event.target.value;
//     setExerciseTimes(updatedExerciseTimes);
//   };

//   const handleExerciseNameChange = (index, event) => {
//     const updatedExerciseNames = [...exerciseNames];
//     updatedExerciseNames[index].exerciseName = event.target.value;
//     setExerciseNames(updatedExerciseNames);
//   };

//   const handleSubmit = () => {
//     const exerciseData = {
//       date: date,
//       email: loggedInUser,
//       exerciseTimes: exerciseTimes.map((exercise) => exercise.exerciseTime),
//       exerciseNames: exerciseNames.map((exercise) => exercise.exerciseName),
//     };

//     console.log(exerciseData);
//   };

//   const handleSubmit = () => {
//     const exerciseData = {
//         date: date,
//         email: loggedInUser,
//         exerciseTimes: exerciseTimes.map((exercise) => exercise.exerciseTime),
//         exerciseNames: exerciseNames.map((exercise) => exercise.exerciseName),
//       };
  
 

//       axios({
//                 credentials: 'include',
//                 method: 'post',
//                 url: 'http://localhost:8080/create',
//                 data: exerciseData
//             })
//             .then(response => {
//               console.log(response);
//               if (response.status === 200 || 201) {
//                   alert("Submitted successfully.")
                  
//               } else {
//                   alert("Submission error!")
                
//               }
//           }).then(() => {

//           })
//           .catch(error => {
//               alert("Submission error!")
//               console.log(error);
//           })



//   };

//   return (
//     <div>
//       <label htmlFor="date">Date:</label>
//       <input
//         type="date"
//         id="date"
//         value={date}
//         onChange={(event) => setDate(event.target.value)}
//       />

//       <label htmlFor="email">Email:</label>
     

//       {exerciseTimes.map((exercise, index) => (
//         <div key={index}>
//           <label htmlFor={`exercise-time-${index}`}>Exercise Time:</label>
//           <input
//             type="number"
//             id={`exercise-time-${index}`}
//             value={exercise.exerciseTime}
//             onChange={(event) => handleExerciseTimeChange(index, event)}
//           />

//           <label htmlFor={`exercise-name-${index}`}>Exercise Name:</label>
//           <input
//             type="text"
//             id={`exercise-name-${index}`}
//             value={exercise.exerciseName}
//             onChange={(event) => handleExerciseNameChange(index, event)}
//           />
//         </div>
//       ))}

//       <button onClick={handleAddExercise}>Add Exercise</button>

//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// }

// export default ExerciseTracker;
