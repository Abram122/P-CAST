import { Routes , Route } from "react-router-dom";
import Signin from "./components/Singin";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Admin from './components/Admin'
import Dashboard from "./components/Dashboard";
import Bootstrap1 from "./components/Bootstrap/Bootstrap 1";
import Bootstrap2 from "./components/Bootstrap/Bootstrap 2";
import Bootstrap3 from "./components/Bootstrap/Bootstrap 3";
import Bootstrap4 from "./components/Bootstrap/Bootstrap 4";
import Bootstrap5 from "./components/Bootstrap/Bootstrap 5";
import Bootstrap6 from "./components/Bootstrap/Bootstrap 6";
import Bootstrap7 from "./components/Bootstrap/Bootstrap 7";
import Bootstrap8 from "./components/Bootstrap/Bootstrap 8";
import RankingPage from "./components/RankingPage";
import Community from "./components/Community";
import Comments from "./components/Comments";
import Service from "./components/service";
import CoursesPage from "./components/CoursesPage";
import AddCourse from "./components/AddCourse";
import Profile from "./components/Profile";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/Courses" element={<CoursesPage/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/addCourse" element={<AddCourse/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/Bootstrap1" element={<Bootstrap1/>}/>
      <Route path="/Bootstrap2" element={<Bootstrap2/>}/>
      <Route path="/Bootstrap3" element={<Bootstrap3/>}/>
      <Route path="/Bootstrap4" element={<Bootstrap4/>}/>
      <Route path="/Bootstrap5" element={<Bootstrap5/>}/>
      <Route path="/Bootstrap6" element={<Bootstrap6/>}/>
      <Route path="/Bootstrap7" element={<Bootstrap7/>}/>
      <Route path="/Bootstrap8" element={<Bootstrap8/>}/>
      <Route path="/community" element={<Community/>}/>
      <Route path="/comments/:id" element={<Comments/>}/>
      <Route path="/RankingPage" element={<RankingPage/>}/>
      <Route path="/service" element={<Service/>}/>
    </Routes>
  );
}

export default App;
