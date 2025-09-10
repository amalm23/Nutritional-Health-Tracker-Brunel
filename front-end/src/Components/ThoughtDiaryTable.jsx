import { Fragment, useEffect, useState } from "react"
import axios from "axios";
import {Link} from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import '../styles/ShowPastNutrionalRecords.css'
import Home from "../pages/Home";
import named from "../assets/unnamed.png";
import EditThoughtDiaryRow from "./EditThoughtDiaryRow";
import ReadThoughtDiaryRow from "./ReadThoughtDiaryRow";
export default function ThoughtDiaryTable() {


const [loggedInUser, setLoggedInUser] = useOutletContext();
const [formResponses, setFormResponses] = useState([]);

useEffect(() => {
    if (loggedInUser !== "") {
      const jwt = sessionStorage.getItem("jwt");
      console.log(jwt);
      axios({
        method: 'get',
        url: 'http://localhost:8080/thoughtdiary/findByEmail',
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
      thought: ""
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
        email: loggedInUser,
        thought: editData.thought
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
    const url = 'http://localhost:8080/thoughtdiary/editData'
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
            setEditID(null);
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
        setEditID(formResponse.formID);

        const values = {
            email: loggedInUser,
            thought : formResponse.thought,
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
        const id = idGet.formID;
        console.log(id);
        const jwt = sessionStorage.getItem('jwt');
        const url = 'http://localhost:8080/thoughtdiary/id2'
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
      <div className="thoughtdiarycontainer">
        <div className="row contact__row">
          <h1 className="register__title">
            {" "}
            Thought Diary Responses for {loggedInUser}:{" "}
          </h1>
          <div className="imageimage">
              <img src = {named} alt = "Brunel Pal Logo" /> 
              </div>
          <form onSubmit={handleEditForm}>
            <table className="table">
              <thead>
                <tr className="table__row">
                  <th className="table__header"> Thought: </th>
                  <th className="table__header"> Actions: </th>
                </tr>
              </thead>

<tbody className="table_body">


</tbody>
<tbody className="table__body">
                {formResponses.map((formResponse) => (
                  <Fragment>
                    {editId === formResponse.formID ? (
                      <EditThoughtDiaryRow
                        editProfileData={editData}
                        handleEditForm={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ReadThoughtDiaryRow
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
                <Link className="login-link" to={"/thoughtdiary"}>
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