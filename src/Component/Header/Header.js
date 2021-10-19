import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark container-fluid">
                <div className="container">
                    <Link className="navbar-brand fw-bold text-info" to="/home">Health Care Center</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarText">
                        <div className="navbar-nav">
                            <Link className="nav-link active fw-bold text-white" aria-current="page" to="/home">Home</Link>
                            <Link className="nav-link active fw-bold text-white" aria-current="page" to="/about">About</Link>
                            <Link className="nav-link active fw-bold text-white" aria-current="page" to="/doctors">Doctors</Link>
                            <Link className="nav-link active fw-bold text-white" aria-current="page" to="/contact">Contact Us</Link>
                        </div>
                        <div className="d-flex justify-content-end">
                            <span className="navbar-text fw-bold text-white bg-info  rounded-pill">
                                {user?.email}
                            </span>
                            {user?.email ?
                                <button onClick={logOut} className="bg-secondary p-2 fw-bold text-white">Log out</button>
                                :
                                <Link to="/login"><button className="bg-info p-2 fw-bold text-white">Log In</button></Link>}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;