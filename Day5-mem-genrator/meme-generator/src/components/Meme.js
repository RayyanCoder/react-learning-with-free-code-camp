import React from 'react';
import ReactDOM from 'react-dom';
import './../styles/Meme.css';
import btnlog from './../images/navbar/Get a new meme image 🖼 (1).png';

export default function Meme(){
    return(

        <div >
            <form>
            <div>
                <div className='meme-input-container'>
                    <div>    
                        <input className='first-input' type="text"></input>
                    </div>
                    <div>         
                       <input className='second-input' type="text"></input>
                    </div>
                    <button className='meme-btn'  type='button'>
                       <span><img className='btn-image' src={btnlog}></img></span> 
                    </button>
                </div>
            </div>
            </form>
        </div>
    );
}