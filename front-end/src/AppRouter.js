import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import App from "./App";
import Registration from "./pages/Registration";
import Home from "./pages/Home"
import Login from "./pages/Login"
import NutrionalHealthForm from "./Components/NutrionalHealthForm";
import MentalHealthQuiz from "./pages/MentalHealthQuiz";
import MyTips from "./pages/MyTips";
import ShowPastNutrionalRecords from "./Components/ShowPastNutrionalRecords";
import ContactUs from "./pages/Contactus";
import ForgottenPassword from "./Components/ForgottenPassword";
import Aboutus from "./pages/Aboutus";
import WhereWeAre from "./pages/WhereWeAre";
import EditProfile from "./Components/EditProfile";
import PhysicalHealth from "./Components/ui/PhysicalHealth";
import MentalHealthThoughtDiary from "./Components/MentalHealthThoughtDiary";
import PhysicalHealthBMITracker from "./Components/PhysicalHealthBMITracker";
import PhysicalHealthTracker from "./Components/PhysicalHealthTracker";
import ThoughtDiaryTable from "./Components/ThoughtDiaryTable";

export default function AppRouter(){
  return (
    <>
  <Router>
    <Routes>
        <Route path={'/'} element={<App/>}>
          <Route index element={<Home />} />
          <Route path={'/register'} element={<Registration/>}/>
          <Route path={'/login'} element={<Login />}/>
          <Route path={'/nutrionalhealthform'} element={<NutrionalHealthForm />}/>
          <Route path={'/mentalhealthquiz'} element={<MentalHealthQuiz />}/>
          <Route path={'/myTips'} element={<MyTips />}/>
          <Route path={'/myPhysical'} element={<PhysicalHealth />}/>
          <Route path={'/showPastNutrionalRecords'} element = {<ShowPastNutrionalRecords/>}/>
          <Route path ={'/contactus'} element = {<ContactUs/>} />
          <Route path = {'/aboutus'} element = {<Aboutus/>}/>
          <Route path = {'/forgotpassword'} element = {<ForgottenPassword/>} />
          <Route path = {'/physicalhealthtracker'} element = {<PhysicalHealthTracker/>} />
          <Route path = {'/bruneldetails'} element = {<WhereWeAre/>}/>
          <Route path = {'/editprofile'} element = {<EditProfile/>}/>
          <Route path = {'/thoughtdiary'} element = {<MentalHealthThoughtDiary/>}/>
          <Route path = {'/bmitracker'} element = {<PhysicalHealthBMITracker/>}/>
          <Route path = {'/thoughttable'} element = {<ThoughtDiaryTable/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}