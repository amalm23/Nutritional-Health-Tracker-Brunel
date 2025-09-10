import React from "react";

const ReadNutrionalFormRow = ({formResponse, handleEditClick, handleDeleteClick}) => {
    return (
      <tr key={formResponse.formID}>
        <td>{formResponse.dateOfConsumption}</td>
        <td>{formResponse.foodName}</td>
        <td>{formResponse.calories}</td>
        <td>{formResponse.consumption}</td>
        <td>{formResponse.drinkName}</td>
        <td>{formResponse.drinkCalories}</td>
        <td>{formResponse.drinkConsumption}</td>
        <td>{formResponse.timeOfDay}</td>
        <td>{formResponse.timeOfConsumption}</td>
        <td>
          {" "}
          <button
            className="table__button"
            type="button"
            onClick = {(e) => handleEditClick(e, formResponse)}
          >
            Edit
          </button>
          <button
           className="table__button__delete"
            type="button"
            onClick={() => handleDeleteClick(formResponse.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
}

export default ReadNutrionalFormRow;