import { useState } from 'react';
import React from 'react';
// import { Component } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

const Home = () => {
      const [openLoginModal, setLoginModal] = useState(false);
      const [openRegisterModal, setRegisterModal] = useState(false);

      return (
          <>
      <div className="container">
        <div className="banner-text">
          <h1>WELCOME TO CLYDE CHILDRENS HOSPITAL</h1>
          <p>LOGIN OR REGISTER TO ENTER THE HOSPITAL PORTAL</p>
        </div>
        <div className="btns">
          <button className="btn login-btn" onClick={() => {setLoginModal(true);}}>Login</button>
          <button className="btn signup-btn" onClick={() => {setRegisterModal(true);}}>Register</button>
        </div>
        {/* signup container */}
        {openRegisterModal && <Register closeModal={setRegisterModal} />}
        {/* <Register /> */}
       
          {/* login container */}
          {openLoginModal && <Login closeModal={setLoginModal} />}
        </div>
          </>
      );
    }

export default Home;