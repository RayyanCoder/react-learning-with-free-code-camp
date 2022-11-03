import React from 'react';
import ReactDOM from 'react-dom';
import logo from './../images/navbar/Logo.png';
import './../styles/Navbar.css';

export default function Navbar(){
    return(
        <div className='navbar-container' >
          <div>
                <img className='navbar-logo' src={logo}></img>
          </div>
          <div >
              <p className='navbar-details'
              >React- Project 3</p>
          </div>
        </div>
    );
}

