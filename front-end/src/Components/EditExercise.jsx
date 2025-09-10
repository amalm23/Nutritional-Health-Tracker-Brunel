import React from "react";

const EditExercises = ({
  editFormData,
  exerciseId,
  handleEditFormChange,
  handleCancelClick,
  handleSaveEdited
}) => {
  return (
    <tr>
      <td>
        <input
          type="date"
          required="required"
          placeholder="Enter Date"
          name="date"
          value={editFormData.date}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>{editFormData.exerciseName}</td>
      <td>{editFormData.exerciseTime}</td>
      <td>
        <button type="submit" onClick={(event) => handleSaveEdited(event, exerciseId)}>Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditExercises;