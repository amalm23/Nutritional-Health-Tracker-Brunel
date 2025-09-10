import React from "react";

const ShowExercises = ({ exercise, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{exercise.date}</td>
      <td>{exercise.exerciseName}</td>
      <td>{exercise.exerciseTime}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, exercise)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(exercise.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ShowExercises;
