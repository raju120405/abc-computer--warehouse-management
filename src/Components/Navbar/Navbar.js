import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container">
                <Link className="navbar-brand text-white" to="/">ABC Computers</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/updateproduct">UpdateProducts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#">Selected items</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/login">LogIn</Link>
                        </li>
                    </ul>
                    <span className="navbar-text text-white">
                        {
                            user ? <span>{user.displayName}
                            <button type="button" class="btn btn-danger mx-2" onClick={()=> signOut(auth)}>Sign out</button></span> : 'user'
                        }
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;