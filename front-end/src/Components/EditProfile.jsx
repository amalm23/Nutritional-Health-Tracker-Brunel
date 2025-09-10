import { Fragment, useEffect, useState } from "react"
import axios from "axios";
import {Link} from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import '../styles/ShowPastNutrionalRecords.css'
import ReadEditProfileRow from "./ReadEditProfileRow";
import EditProfileRow from "./EditProfileRow";
import Home from "../pages/Home";
import Captureproto from "../assets/Capture proto.PNG";

export default function EditProfile() {


const [loggedInUser, setLoggedInUser] = useOutletContext();
const [formResponses, setFormResponses] = useState([]);

useEffect(() => {
    if (loggedInUser !== "") {
      const jwt = sessionStorage.getItem("jwt");
      console.log(jwt);
      axios({
        method: 'get',
        url: 'http://localhost:8080/user/getUserByEmail',
        params: {email: loggedInUser},
        headers: { Authorization: `Bearer ${jwt}` },
      })
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data); 
            setFormResponses(response.data);
          }
        })
        .catch((err) => {
          console.log(err.response);
          setFormResponses("Data failure");
        });
    }
  }, [loggedInUser]);

    console.log(formResponses);


    const [editData, setEditData] = useState ({
        firstName : "",
        lastName : "",
        birthday : "",
        email: "",
        username : "",
        password : "",
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
        id : editId,
        firstName : editData.firstName,
        lastName : editData.lastName, 
        birthday : editData.birthday,
        email: editData.email,
        username : editData.username,
        password : editData.password,
    };

    const newData = [...formResponses];

    const i = formResponses.findIndex((formResponse) => formResponse.id === editId);

    newData[i] = editedData;
    console.log(editedData);
    const idGet = editedData.id;
    console.log(idGet);
    
    setFormResponses(newData);

    // setEditID(null);

    const jwt = sessionStorage.getItem('jwt');
    const url = 'http://localhost:8080/user/editUserProfile'
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
          }
        }else{
            alert("Submission error!")
        }
    }).then(()=>{ 
        // setEditID(null);
    })
    .catch(error=>{
        alert("Submission error!")
        console.log(error);
    })
 };
    const handleEditClick = (e, formResponse) => {
        e.preventDefault();
        setEditID(formResponse.id);

        const values = {
            firstName : formResponse.firstName,
            lastName : formResponse.lastName, 
            birthday : formResponse.birthday,
            email: formResponse.email,
            username : formResponse.username,
            password : formResponse.password,
        };
        console.log(values);
        setEditData(values);
    };

    const handleCancelClick = () => {
        setEditID(null);  
    }

    const handleDeleteClick = (formResponseid) => {
      const newData = [...formResponses];
        const i = newData.findIndex((formResponse) => formResponse.id === formResponseid)
        const idGet = newData[i];
        console.log(idGet);
        const id = idGet.id;
        console.log(id);
        const jwt = sessionStorage.getItem('jwt');
        const url = 'http://localhost:8080/user/deleteUser'
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
            setLoggedInUser("");
            if (loggedInUser === "") {
                  <Link to= {'/showPastNutrionalRecords'} className="nav__link"> <font color = "blue"><b>See previous inputs </b></font></Link>
            }
        })
        .catch(error=>{
            alert("Submission error!")
            console.log(error);
        })
    };


if (loggedInUser !== "") {
    return (
      <div className="container">
        <div className="row contact__row">
          <h1 className="register__title">
            {" "}
            Edit Profile for {loggedInUser}:{" "}
          </h1>
          <div className="imageimage">
          <img src={Captureproto} alt="" className= "image"/> 
          </div>
          <form onSubmit={handleEditForm}>
            <table className="table">
              <thead>
                <tr className="table__row">
                  <th className="table__header"> First Name: </th>
                  <th className="table__header"> Last Name: </th>
                  <th className="table__header"> Birthday: </th>
                  <th className="table__header"> Email: </th>
                  <th className="table__header"> Username: </th>
                  <th className="table__header"> Password: </th>
                  <th className="table__header"> Actions: </th>
                </tr>
              </thead>

<tbody className="table_body">


</tbody>
<tbody className="table__body">
                {formResponses.map((formResponse) => (
                  <Fragment>
                    {editId === formResponse.id ? (
                      <EditProfileRow
                        editProfileData={editData}
                        handleEditForm={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ReadEditProfileRow
                        userInformation={formResponse}  
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