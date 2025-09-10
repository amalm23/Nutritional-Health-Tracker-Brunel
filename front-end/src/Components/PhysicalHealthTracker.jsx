import React, { useState, useEffect } from "react";

import axios from 'axios';
import ShowExercises from "../ShowExercises";
import EditExercises from "./EditExercise";
import "./PhysicalHealthTracker.css"
import { useOutletContext } from "react-router-dom";

const PhysicalHealthTracker = () => {
  const [exercises, setExercises] = useState([{ date: "", exerciseName: "", exerciseTime: "" }]);
  const [loggedInUser, setLoggedInUser] = useOutletContext();

  // useEffect(() => {
  //   axios.get("http://localhost:8080/exusers")
  //     .then(resp => setExercises(resp.data))

  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   console.log(" api called\n", exercises)
  // }, []);
  useEffect(()=>{
        if(loggedInUser!==""){
            const jwt = sessionStorage.getItem('jwt');
            console.log(jwt);
            axios({
              headers: {"Authorization" : `Bearer ${jwt}`},
              method: 'get',
                url: `http://localhost:8080/${loggedInUser}`,
                // params: {email: loggedInUser}
               
            }) .then(resp => setExercises(resp.data))

                .catch((err) => {
                  console.log(err);
                });
            
        }
    },[loggedInUser]);

  const [addFormData, setAddFormData] = useState({
    date: "",
    exerciseName: "",
    exerciseTime: "",
  });

  const [editFormData, setEditFormData] = useState({
    date: "",
    exerciseName: "",
    exerciseTime: "",
  });


  const [editExerciseId, setEditExerciseId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };


  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    console.log(newFormData);
    setEditFormData(newFormData);
  };



  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newExercise = {
      date: addFormData.date,
      email: loggedInUser,
      exerciseName: addFormData.exerciseName,
      exerciseTime: addFormData.exerciseTime
    };

    const newExercises = [...exercises, newExercise];
    setExercises(newExercises);

    axios.post("http://localhost:8080/excreate", newExercise)

  //   axios({
  //     credentials: 'include',
  //     method: 'post',
  //     url: 'http://localhost:8080/excreate',
  //     data: newExercise
  //  })
    .then(console.log("Exercise was Added",newExercise ))
      .catch((err) => {
        console.log(err);
      });
  };


  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedExercise = {
      id: editExerciseId,
      date: exercises.date,
      exerciseName: exercises.exerciseName,
      exerciseTime: exercises.exerciseTime
    };

    const newExercise = [...exercises];
    const index = exercises.findIndex((exercise) => exercise.id === editExerciseId);
    newExercise[index] = editedExercise;
    setExercises(newExercise);
    setEditExerciseId(null);
  };


  const handleEditClick = (event, exercise) => {
    event.preventDefault();

    setEditExerciseId(exercise.id);
    const formValues = {
      date: exercise.date,
      exerciseName: exercise.exerciseName,
      exerciseTime: exercise.exerciseTime
    };
    setEditFormData(formValues);
  };


  const handleCancelClick = () => {
    setEditExerciseId(null);
  };


  // const handleDeleteClick = (exerciseId) => {
  //   const newContacts = [...exercises];
  //   const index = exercises.findIndex((exercise) => exercise.id === exerciseId);
  //   newContacts.splice(index, 1);
  //   setExercises(newContacts);

  //   axios.delete("http://localhost:8080/exdelete" + exerciseId)
  //     .then(console.log("Exercise was deleted"))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const handleDeleteClick = (exerciseId) => {
    const newExercises = exercises.filter((exercise) => exercise.id !== exerciseId);
    setExercises(newExercises);
  
    const jwt = sessionStorage.getItem('jwt');
    axios({
      method: 'delete',
      url: `http://localhost:8080/exdelete/${exerciseId}`,
      headers: {"Authorization" : `Bearer ${jwt}`}
    })
      .then(console.log("Exercise was deleted"))
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSaveEdited = (event, exerciseId) => {
    event.preventDefault();

    const editedExercise = {
      id: exerciseId,
      date: editFormData.date,
      exerciseName: editFormData.exerciseName,
      exerciseTime: editFormData.exerciseTime
    };

    const newExercise = [...exercises];
    const index = exercises.findIndex((exercise) => exercise.id === editExerciseId);
    newExercise[index] = editedExercise;
    setExercises(newExercise);
    setEditExerciseId(null);
    console.log("editExerciseId", String(editedExercise.date))

    axios.put("http://localhost:8080/exupdate" + exerciseId + "/" + editedExercise.date)
      .then(console.log("Exercise was updated"))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>

      <div className="app-container">
        <form onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Exercise Name</th>
                <th>Exercise Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {exercises.map((exercise) => (
                <>
                  {editExerciseId === exercise.id ? (
                    <EditExercises
                      editFormData={editFormData}
                      exerciseId={exercise.id}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                      handleSaveEdited= {handleSaveEdited}
                      
                    />
                  ) : (
                    <ShowExercises
                      exercise={exercise}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </>
              ))}
            </tbody>
          </table>
        </form>

        <h2>Add Exercises</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input
            type="date"
            name="date"
            required="required"
            placeholder="Enter Date"
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="exerciseName"
            required="required"
            placeholder="Enter Exercise Name"
            onChange={handleAddFormChange}
          />
          <input
            type="number"
            name="exerciseTime"
            required="required"
            placeholder="Enter Exercise Time"
            onChange={handleAddFormChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PhysicalHealthTracker;
