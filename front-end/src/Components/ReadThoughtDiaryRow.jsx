import React from "react";

const ReadThoughtDiaryRow = ({formResponse, handleEditClick, handleDeleteClick}) => {
    return (
      <tr key={formResponse.id}>
        <td>{formResponse.thought}</td>
        <td>
          {" "}
          <button
            className="table__button"
            type="button"
            onClick={(e) => handleEditClick(e, formResponse)}
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

export default ReadThoughtDiaryRow;