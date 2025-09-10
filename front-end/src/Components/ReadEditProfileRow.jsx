import React from "react";

const ReadEditProfileRow = ({userInformation, handleEditClick, handleDeleteClick}) => {
    return (
      <tr key={userInformation.id}>
        <td>{userInformation.firstName}</td>
        <td>{userInformation.lastName}</td>
        <td>{userInformation.birthday}</td>
        <td>{userInformation.email}</td>
        <td>{userInformation.username}</td>
        <td>{userInformation.password}</td>
        <td>
          {" "}
          <button
            className="table__button"
            type="button"
            onClick={(e) => handleEditClick(e, userInformation)}
          >
            Edit
          </button>
          <button 
           className="table__button__delete"
            type="button"
            onClick={() => handleDeleteClick(userInformation.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
}

export default ReadEditProfileRow;