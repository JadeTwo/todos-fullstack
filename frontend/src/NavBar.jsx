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
            <ul>
                {userAuth ? <div>
                hello {userAuth?.email}
                    <li>
                    <Link to="/">Home</Link>
                </li>

               <button onClick={logout}>log out</button>
                </div>:<div>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
                <li>
                    <Link to="/login">LogIN</Link>
                </li>
                    </div>}
             
             
            </ul>
        </div>
    );
}

export default NavBar;
