import React from "react";

const EditThoughtDiaryRow = ({
    editProfileData,
    handleEditForm,
    handleCancelClick,
}) => {
    return (
        <tr>
            <td>
                <textarea
                type = "text"
                required = "required"
                placeholder="Enter your thoughts to relax :)"
                name = "thought"
                size={10}
                value = {editProfileData.thought}
                onChange = {handleEditForm}
                ></textarea>
                </td>
                <td>
        <button type="submit">Save</button>
                <button type = "button" onClick={handleCancelClick}> Cancel </button>
                </td>
        </tr>
    )
}

export default EditThoughtDiaryRow;