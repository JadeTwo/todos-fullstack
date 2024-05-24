import React, { useState,useEffect } from 'react';
import {auth} from "./firebase/config";
import { createUserWithEmailAndPassword } from 'firebase/auth';



function Signup({setUser}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(null)
  const [success,setSuccess]=useState(null)
  const handleSubmit =async (event) => {
    event.preventDefault();
    setLoading(true)
    setError(null)
    console.log(auth)
    try {
    
      let res =await createUserWithEmailAndPassword(auth,email,password)
   
      console.log(`Email: ${email}, Password: ${password}`);
      // setUser({authIsReady:true,user:res.user})
      //create user
      // it will create documnet in the users collection
      //set document with the uid provided by firebase
      //add email as property to the document
      setUser(res.user)
      setSuccess("user created successfully")

      
      console.log("🚀 ~ handleSubmit ~ res:", res)
    } catch (error) {
      console.log("error",error)
      setError(error.message)
    }
    // setTimeout(()=>{
      
      setLoading(false)
    // },3000)
  };


  return (
    <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
      <label>
        Email:
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} required />
      </label>
      <label>
        Password:
        <input type="text" value={password} onChange={e => setPassword(e.target.value)} required />
      </label>
     {!loading && <input type="submit" value="Sign up" />}
     {loading && <p>loading...</p>}
     {error && <p>{error}</p>}
     {success && <p>{success}</p>}
    </form>
  );
}

export default Signup;