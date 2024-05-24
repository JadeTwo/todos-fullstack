import LogIn from "./Login";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import Todo from "./Todo"
import {BrowserRouter as Router,Routes, Route,Navigate} from 'react-router-dom';
import { useState,useEffect } from "react";
import { auth } from "./firebase/config";
function App() {

  const [userAuth,setUserAuth] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log("auth status changed",user)
      setUserAuth(user)
    })
  }, [])
  return (
    <>
  {/* <Todo/> */}
  <Router>

    <NavBar userAuth={userAuth} setUserAuth={setUserAuth}/>
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
