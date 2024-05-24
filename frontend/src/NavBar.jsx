import React from 'react';
import { Link } from 'react-router-dom';
import {auth} from "./firebase/config";
import { signOut } from 'firebase/auth';
const NavBar = ({userAuth,setUserAuth}) => {

    const logout = async() => {
        await signOut(auth)
        setUserAuth(null)
    }
    return (
        <div>
            <ul style={{display:"flex",justifyContent:"space-between",width:"400px"}}>
                
                {userAuth ? <>
                    
                    <Link to="/">Home</Link>
               <button onClick={logout}>log out</button>
                </>:<>
                    <Link to="/signup">Signup</Link>
                
                    <Link to="/login">LogIN</Link>
          
                    </>}
             
             
            </ul>
        </div>
    );
}

export default NavBar;
