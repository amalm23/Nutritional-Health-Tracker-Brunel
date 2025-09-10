import { Fragment, useEffect, useState } from "react"
import axios from "axios";
import {Link} from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { nanoid } from "nanoid";
import EditableRow from "./EditableRow";
import ReadRow from "./ReadRow";
import '../styles/ShowPastNutrionalRecords.css'
import { faPray } from "@fortawesome/free-solid-svg-icons";
import Captureproto from "../assets/p1bm5844cb6oacnd1std183s12gt6.jpg.optimal.jpg"
export default function ShowPastNutrionalRecords() {


const [loggedInUser, setLoggedInUser] = useOutletContext();
const [formResponses, setFormResponses] = useState([]);

    useEffect(()=>{
        if(loggedInUser!==""){
            const jwt = sessionStorage.getItem('jwt');
            console.log(jwt);
            axios({
                method: 'get',
                url: 'http://localhost:8080/api/v1/nutrionLogin/nutrionalF/findByEmail',
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


    const [addData, setAddFormData] = useState ({
        dateOfConsumption : "",
        foodName : "",
        calories : "",
        consumption: "",
        drinkName : "",
        drinkCalories : "",
        drinkConsumption: "",
        timeOfConsumption: "",
    })

    const [editData, setEditData] = useState ({
        dateOfConsumption : "",
        foodName : "",
        calories : "",
        consumption: "",
        drinkName : "",
        drinkCalories : "",
        drinkConsumption: "",
        timeOfConsumption: "",
    })

    const [editId, setEditID] = useState(null);

    const handleAddFormChange = (e) => {
        e.preventDefault();
        const field = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newData = {...addData};
        newData[field] = fieldValue;
        setAddFormData(newData);
    }

    const handleEditFormChange = (e) => {
        e.preventDefault();
        const field = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newData = {...editData};
        newData[field] = fieldValue;
        setEditData(newData);
    }

    const handleAddForm = (e) => {
        e.preventDefault();
        const addedData = {
          formID: nanoid(),
            dateOfConsumption: addData.dateOfConsumption,
            foodName : addData.foodName,
            calories : addData.calories,
            consumption: addData.consumption,
            drinkName : addData.drinkName,
            drinkCalories : addData.drinkCalories,
            drinkConsumption: addData.drinkConsumption,
            timeOfConsumption: addData.timeOfConsumption
        };

        const newData = [...formResponses, addedData]
        setFormResponses(newData);

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
        timeOfConsumption: editData.timeOfConsumption
    };

    const newData = [...formResponses];

    const i = formResponses.findIndex((formResponse) => formResponse.formID === editId);

    newData[i] = editedData;
    console.log(editedData);
    const idGet = editedData.formID;
    console.log(idGet);
    
    setFormResponses(newData);

    // setEditID(null);

    const jwt = sessionStorage.getItem('jwt');
    const url = 'http://localhost:8080/api/v1/nutrionLogin/nutrionalF/editData'
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
            alert("Submitted successfully.")
        }else{
            alert("Submission error!")
        }
    }).then(()=>{ 
        setEditID(null);
    })
    .catch(error=>{
        alert("Submission error!")
        console.log(error);
    })
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
        console.log(id);
        const jwt = sessionStorage.getItem('jwt');
        const url = 'http://localhost:8080/api/v1/nutrionLogin/nutrionalF/id2'
        axios({
            url: url,
            params: {id2: id},
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



    return (
      <div className="container">
        <div className="row contact__row">
        <div className="imageimage">
          <img src={Captureproto} alt="" className= "image"/> 
          </div>
          <h1 className="register__title">
            {" "}
            Recent Nutritional Form Inputs for User {loggedInUser}:{" "}
          </h1>
          <form onSubmit={handleEditForm}>
            <table className="table">
              <thead>
                <tr className="table__row">
                <th className="table__header"> Form ID: </th>
                  <th className="table__header"> Date Of Consumption: </th>
                  <th className="table__header"> Food Name: </th>
                  <th className="table__header"> Food Calories: </th>
                  <th className="table__header"> Food Consumption: </th>
                  <th className="table__header"> Drink Name: </th>
                  <th className="table__header"> Drink Calories: </th>
                  <th className="table__header"> Drink Consumption: </th>
                  <th className="table__header"> Time of Consumption: </th>
                  <th className="table__header"> Actions </th>
                </tr>
              </thead>

              <tbody className="table__body">
                {formResponses.map((formResponse) => (
                  <Fragment>
                    {editId === formResponse.formID ? (
                      <EditableRow
                        editFormData={editData}
                        handleEditForm={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ReadRow
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
                <Link className="login-link" to={"/nutrionalhealthform"}>
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