import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div>
            <ul>
                hello email
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
                <li>
                    <Link to="/login">LogIN</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
