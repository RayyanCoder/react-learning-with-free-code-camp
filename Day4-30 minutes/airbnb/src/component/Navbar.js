import React from 'react';
import './../styles/Navbar.css';
import airnbn from './../images/Vector.png';


export default function Navbar(){
    return(
       <nav>
        <img className= "nav--logo"src={airnbn} alt='Airbnb'/>
       </nav>
    )
}