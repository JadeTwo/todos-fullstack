import LogIn from "./Login";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import Todo from "./Todo"
import {BrowserRouter as Router,Routes, Route,Navigate} from 'react-router-dom';
import { useState,useEffect } from "react";
function App() {

  const [userAuth,setUserAuth] = useState(null)

  return (
    <>
  {/* <Todo/> */}
  <Router>

    <NavBar/>
    <Routes>
      <Route path="/" element={<Todo/>}/>
      <Route path="/signup"element = {<SignUp setUserAuth={setUserAuth}/> }/>
      <Route path="/login"element = {<LogIn setUserAuth={setUserAuth}/> }/>
    </Routes>
  </Router>
    </>
  )
}

export default App
