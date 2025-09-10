import React from "react";

const EditProfileRow = ({
    editProfileData,
    handleEditForm,
    handleCancelClick,
}) => {
    return (
        <tr>
            <td>
                <input
                type = "text"
                required = "required"
                placeholder="Enter your First Name"
                name = "firstName"
                size={10}
                value = {editProfileData.firstName}
                onChange = {handleEditForm}
                ></input>
                </td>
                <td>
                <input
                type = "text"
                required = "required"
                placeholder="Enter the Last Name"
                name = "lastName"
                size={10}
                value = {editProfileData.lastName}
                onChange = {handleEditForm}   
                ></input>
                </td>
                <td>
                <input
                type = "date"
                required = "required"
                placeholder="Enter your birthday"
                name = "birthday"
                size={10}
                value = {editProfileData.birthday}
                onChange = {handleEditForm}
                ></input>
                </td>
                <td>
                <input
                type = "email"
                required = "required"
                placeholder="Enter your email"
                name = "email"
                size={20}
                value = {editProfileData.email}
                onChange = {handleEditForm}
                ></input>
                </td>
                <td>
                <input
                type = "text"
                required = "required"
                placeholder="Enter a username"
                name = "username"
                size={10}
                value = {editProfileData.username}
                onChange = {handleEditForm}
                ></input>
                </td>
                <td>
                <input
                type = "password"
                required = "required"
                placeholder="Enter a password"
                name = "password"
                size={30}
                value = {editProfileData.password}
                onChange = {handleEditForm}
                minLength={8}
                ></input>
                </td>
                <td>
        <button type="submit">Save</button>
                <button type = "button" onClick={handleCancelClick}> Cancel </button>
                </td>
        </tr>
    )
}

export default EditProfileRow;