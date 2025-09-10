import React from "react";
import { useRef, useState, useEffect } from "react";

const EditableNutrionalFormRow = ({
editFormData,
handleCancelClick,
handleEditForm
}) => {

    return (
        <tr>
            <td>
                <input
                type = "date"
                required = "required"
                placeholder="Enter the Date you ate in"
                name = "dateOfConsumption"
                size={10}
                value = {editFormData.dateOfConsumption}
                onChange = {handleEditForm}
                ></input>
                </td>
                <td>
                <input
                type = "text"
                required = "required"
                placeholder="Enter the Food Name"
                name = "foodName"
                size={10}
                maxLength={30}
                value = {editFormData.foodName}
                onChange = {handleEditForm}   
                ></input>
                </td>
                <td>
                <input
                type = "number"
                required = "required"
                placeholder="Enter the Food Calories"
                name = "calories"
                size={10}
                value = {editFormData.calories}
                onChange = {handleEditForm}
                ></input>
                </td>
                <td>
                <input
                type = "number"
                required = "required"
                placeholder="Enter the consumption of Food"
                name = "consumption"
                size={5}
                value = {editFormData.consumption}
                onChange = {handleEditForm}
                ></input>
                </td>
                <td>
                <input
                type = "text"
                required = "required"
                placeholder="Enter the Drink Name"
                name = "drinkName"
                size={17}
                maxLength={30}
                value = {editFormData.drinkName}
                onChange = {handleEditForm}
                ></input>
                </td>
                <td>
                <input
                type = "number"
                required = "required"
                placeholder="Enter the Drink Calories"
                name = "drinkCalories"
                size={5}
                value = {editFormData.drinkCalories}
                onChange = {handleEditForm}
                ></input>
                </td>
                <td>
                <input
                type = "number"
                required = "required"
                placeholder="Enter the consumption of Drink"
                name = "drinkConsumption"
                size={5}
                value = {editFormData.drinkConsumption}
                onChange = {handleEditForm}
                ></input>
                </td>
                <td>
                <input
                type = "text"
                required = "required"
                placeholder="Enter the Time Of Day"
                name = "timeOfDay"
                size={10}
                value = {editFormData.timeOfDay}
                onChange = {handleEditForm}
                ></input>
                </td>
                <td>
                <input
                type = "time"
                required = "required"
                placeholder="Enter the Time consumed in"
                name = "timeOfConsumption"
                size={10}
                value = {editFormData.timeOfConsumption}
                onChange = {handleEditForm}
                ></input>
                </td>
                <td>
        <button className= "table__button" type="submit">Save</button>
                <button type = "button" className= "table__button__delete" onClick={handleCancelClick}> Cancel </button>
                </td>
        </tr>
    )
}

export default EditableNutrionalFormRow;