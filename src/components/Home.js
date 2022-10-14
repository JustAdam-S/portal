import {useState} from 'react';
import React from 'react';
// import { Component } from 'react';
import Login from '../components/Login';
// import Register from '../components/Register';

const Home = () => {
    const [openLoginModal, setLoginModal] = useState(false);

    return (
        <>
        <div className="container">
        <div className="banner-text">
            <h1>WELCOME TO CLYDE CHILDRENS HOSPITAL</h1>
            <p>LOGIN OR REGISTER TO ENTER HOSPITAL PORTAL</p>
        </div>
        <div className="btns">
            <button className="btn login-btn" onClick={() => {setLoginModal(true);}}>Login</button>
            <button className="btn signup-btn">Register</button>
        </div>
        {/* Signup container */}
        {/* <Register */}

         {/* Login container */}
         {openLoginModal && <Login/>}
        </div>
        </>
    );
}

export default Home;