import "./App.css";
import {Link, Outlet} from "react-router-dom"
import React, {useState} from "react"
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import NavLogin from "./Components/NavLogin"
import FooterLogin from "./Components/FooterLogin"

export default function App() {
  const [loggedInUser, setLoggedinUser] = useState("");

  if (loggedInUser === "") { 
    return (
      <>
      <div className="App">
          <Nav/>
        <main className="App-main">
          <Outlet context={[loggedInUser,setLoggedinUser]}/>
        </main>
        <Footer/>
      </div>
      </>
    );
  }

  else {
    return (
      <>
      <div className="App">
          <NavLogin/>
        <main className="App-main">
          <Outlet context={[loggedInUser,setLoggedinUser]}/>
        </main>
        <FooterLogin/>
      </div>
      </>
    );
  }
}
