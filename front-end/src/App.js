import { Routes , Route } from "react-router-dom";

// forms 
import Signin from "./components/Singin";
import Signup from "./components/Signup";

// home 
import Home from "./components/Home";

// admin part 
import Dashboard from "./components/Dashboard";
import AdminPanel from "./components/Adminpanel";
import QuestionsManagement from "./components/QuestionsManagement";


// bootstrap 
import Bootstrap1 from "./components/Bootstrap/Bootstrap 1";
import Bootstrap2 from "./components/Bootstrap/Bootstrap 2";
import Bootstrap3 from "./components/Bootstrap/Bootstrap 3";
import Bootstrap4 from "./components/Bootstrap/Bootstrap 4";
import Bootstrap5 from "./components/Bootstrap/Bootstrap 5";
import Bootstrap6 from "./components/Bootstrap/Bootstrap 6";
import Bootstrap7 from "./components/Bootstrap/Bootstrap 7";
import Bootstrap8 from "./components/Bootstrap/Bootstrap 8";


import RankingPage from "./components/RankingPage";

import Service from "./components/serviceHome";
import CoursesPage from "./components/CoursesPage";
import AddCourse from "./components/AddCourse";
import Profile from "./components/Profile";
import Services from "./components/Services";
import AddService from "./components/Addservices";
import Addservice from "./components/Addservice";
import Questions from "./components/Questions";
import ServiceDetails from "./components/ServiceDetails";
import ServicesPage from "./components/ServicesPage";
import CourceDetails from "./components/CourceDetails";
// community 
import Community from "./components/community";
import Comments from "./components/Comment";
// Admin 
import Admin from "./components/Admin";
// soon 
import Soon from "./components/Soon";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>

      {/* services  */}
      <Route path="/services" element={<Services/>}/>
      <Route path="/serviceDetails/:id" element={<ServiceDetails/>}/>
      <Route path="/services/:cat" element={<ServicesPage/>}/>

      <Route path="/servicepanel" element={<AdminPanel/>}/>
      <Route path="/Questions" element={<Questions/>}/>
      <Route path="/managequestions" element={<QuestionsManagement/>}/>
      <Route path="/addcategory" element={<AddService/>}/>
      <Route path="/addservice" element={<Addservice/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/Courses" element={<CoursesPage/>}/>
      <Route path="/addCourse" element={<AddCourse/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      {/* couce datils page   */}
      <Route path="/courcedetils" element={<CourceDetails/>}/>
      {/* bootstrap  */}
      <Route path="/Bootstrap1" element={<Bootstrap1/>}/>
      <Route path="/Bootstrap2" element={<Bootstrap2/>}/>
      <Route path="/Bootstrap3" element={<Bootstrap3/>}/>
      <Route path="/Bootstrap4" element={<Bootstrap4/>}/>
      <Route path="/Bootstrap5" element={<Bootstrap5/>}/>
      <Route path="/Bootstrap6" element={<Bootstrap6/>}/>
      <Route path="/Bootstrap7" element={<Bootstrap7/>}/>
      <Route path="/Bootstrap8" element={<Bootstrap8/>}/>


      {/* ranking  */}
      <Route path="/RankingPage" element={<RankingPage/>}/>
      <Route path="/service" element={<Service/>}/>
      {/* community  */}
      <Route path="/community" element={<Community/>}/>
      <Route path="/comments/:id" element={<Comments/>}/>

      {/* Admin  */}
      <Route path="/Admin" element={<Admin/>}/>

      {/* soon page  */}
      <Route path="/soon" element={<Soon/>}/>
    </Routes>
  );
}

export default App;
