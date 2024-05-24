import React,{useState,useEffect} from 'react';
import {auth } from './firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
const LogIn = ({setUserAuth}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('submitted',email,password);
        try {
            let response=   await  signInWithEmailAndPassword(auth,email,password)
            console.log("🚀 ~ handleSubmit ~ response:", response)
            setUserAuth(response.user)
        } catch (error) {
            console.log("🚀 ~ handleSubmit ~ error:", error)
            
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">email</label>
                <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="">password</label>
                <input type="text" onChange={(e)=>setPassword(e.target.value) }/>
                    <button>Log in</button>
            </form>
        </div>
    );
}

export default LogIn;

