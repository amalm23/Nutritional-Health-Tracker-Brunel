import { Fragment, useEffect, useState } from "react"
import axios from "axios";
import {Link} from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import '../styles/ShowPastNutrionalRecords.css'
import Captureproto from '../assets/p1bm5844cb6oacnd1std183s12gt6.jpg.optimal.jpg';
import Home from "../pages/Home";
import EditableNutrionalFormRow from "./EditableNutrionalTableRow";
import ReadNutrionalFormRow from "./ReadNutrionalTableRow";
export default function ShowPastNutrionalRecords() {


const [loggedInUser, setLoggedInUser] = useOutletContext();
const [formResponses, setFormResponses] = useState([]);



    useEffect(()=>{
        if(loggedInUser!==""){
            const jwt = sessionStorage.getItem('jwt');
            console.log(jwt);
            axios({
                method: 'get',
                url: 'http://localhost:8080/nutrionalF/findByEmail',
                params: {email: loggedInUser},
                headers: {"Authorization" : `Bearer ${jwt}`}
            }).then((response) => {
                if (response.status === 200){
                    console.log(response.data);
                    setFormResponses(response.data);
                }
            }).catch(err => {
                console.log(err.response);
                setFormResponses("Data failure");
            })
        }
    },[loggedInUser]);

    console.log(formResponses);

    const [editData, setEditData] = useState ({
        dateOfConsumption : "",
        foodName : "",
        calories : "",
        consumption: "",
        drinkName : "",
        drinkCalories : "",
        drinkConsumption: "",
        timeOfDay: "",
        timeOfConsumption: "",
    })

    const [editId, setEditID] = useState(null);


    const handleEditFormChange = (e) => {
        e.preventDefault();
        const field = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newData = {...editData};
        newData[field] = fieldValue;
        setEditData(newData);
    }

    const handleEditForm = (e) => {
        e.preventDefault();

        const editedData = {
        formID : editId,
        dateOfConsumption: editData.dateOfConsumption,
        foodName : editData.foodName,
        calories : editData.calories,
        consumption: editData.consumption,
        drinkName : editData.drinkName,
        drinkCalories : editData.drinkCalories,
        drinkConsumption: editData.drinkConsumption,
        timeOfDay: editData.timeOfDay,
        timeOfConsumption: editData.timeOfConsumption
    };

    const newData = [...formResponses];

    const i = formResponses.findIndex((formResponse) => formResponse.formID === editId);

    newData[i] = editedData;
    console.log(editedData);
    const idGet = editedData.formID;
    console.log(idGet);
    
    setFormResponses(newData);

    if (editedData.timeOfDay === "Breakfast" || editedData.timeOfDay === "Lunch" || editedData.timeOfDay === "Dinner" || editedData.timeOfDay === "Snack" || editedData.timeOfDay === "Other") {

    const jwt = sessionStorage.getItem('jwt');
    const url = 'http://localhost:8080/nutrionalF/editData'
    axios({
        url: url,
        params: {id2: idGet},
        data: editedData,
        body: formResponses,
        credentials: 'include',
        method: 'put',
        headers: {"Authorization" : `Bearer ${jwt}`}
     })
     .then(response=>{
        console.log(response);
        if (response.status === 200 || 201){
          if (response.data === "False") {
            alert("Submission error!");
          }
          else if (response.data === "Saved") {
            alert("Submitted successfully.")
            setEditID(null);
        }else{
            alert("Submission error!")
        }
      }
    }).then(()=>{ 
    })
    .catch(error=>{
        alert("Submission error!")
        console.log(error);
    })
  }
  else {
    alert("Please type in the correct time of day");
  }
 };
    const handleEditClick = (e, formResponse) => {
        e.preventDefault();
        setEditID(formResponse.formID);

        const values = {
            dateOfConsumption: formResponse.dateOfConsumption,
            foodName : formResponse.foodName,
            calories : formResponse.calories,
            consumption: formResponse.consumption,
            drinkName : formResponse.drinkName,
            drinkCalories : formResponse.drinkCalories,
            drinkConsumption: formResponse.drinkConsumption,
            timeOfDay: formResponse.timeOfDay,
            timeOfConsumption: formResponse.timeOfConsumption
        };
        console.log(values);
        setEditData(values);
    };

    const handleCancelClick = () => {
        setEditID(null);  
    }

    const handleDeleteClick = (formResponseid) => {
        const newData = [...formResponses];
        const i = formResponses.findIndex((formResponse) => formResponse.id === formResponseid)
        const idGet = newData[i];
        console.log(idGet);
        const id = idGet.formID;
        const email = idGet.email;
        console.log(id);
        console.log(email);
        const jwt = sessionStorage.getItem('jwt');
        const url = 'http://localhost:8080/nutrionalForm/delete/id'
        axios({
            url: url,
            params: {id2: id, email: email},
            credentials: 'include',
            method: 'delete',
            headers: {"Authorization" : `Bearer ${jwt}`}
         })
         .then(response=>{
            console.log(response);
            if (response.status === 200 || 201){
                alert("Submitted successfully.")
            }else{
                alert("Submission error!")
            }
        }).then(()=>{
          newData.splice(i, 1);
          setFormResponses(newData);
        })
        .catch(error=>{
            alert("Submission error!")
            console.log(error);
        })
    };

  if (loggedInUser !== "") { 
    return (
      <div className="tablecontainer">
        <div className="row contact__row">
          <h1 className="register__title">
            {" "}
            Recent Nutritional Form Inputs for User {loggedInUser}:{" "}
          </h1>
          <div className="imageimage">
          <img src={Captureproto} alt="" className= "image"/> 
          </div>
          <form onSubmit={handleEditForm}>
            <table className="table">
              <thead>
                <tr className="table__row">
                  <th className="table__header"> Date Of Consumption: </th>
                  <th className="table__header"> Food Name: </th>
                  <th className="table__header"> Food Calories: </th>
                  <th className="table__header"> Food Consumption: </th>
                  <th className="table__header"> Drink Name: </th>
                  <th className="table__header"> Drink Calories: </th>
                  <th className="table__header"> Drink Consumption: </th>
                  <th className="table__header"> Time Of Day: </th>
                  <th className="table__header"> Time of Consumption: </th>
                  <th className="table__header"> Actions </th>
                </tr>
              </thead>

              <tbody className="table__body">
                {formResponses.map((formResponse) => (
                  <Fragment>
                    {editId === formResponse.formID ? (
                      <EditableNutrionalFormRow
                        editFormData={editData}
                        handleEditForm={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ReadNutrionalFormRow
                        formResponse={formResponse}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                      />
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </form>
          <div>
            <br />
            <br />

            <div className="nav__container">
              <ul className="nav__list">
                <Link className="nav__link" to={"/nutrionalhealthform"}>
                  <font size="+3">
                    <b>
                      <center>Add new Record</center>
                    </b>
                  </font>
                </Link>
              </ul>
            </div>
            <br></br>

            <br></br>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }

  if (loggedInUser === "") {
    return (
      <Home></Home>
    )
  }
  
    }