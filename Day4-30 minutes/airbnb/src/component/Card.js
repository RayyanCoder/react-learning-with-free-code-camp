import React from 'react';
import swimmer from './../images/card/image 12.png';
import star1 from './../images/card/Star 1.png';

import './../styles/cardStyle.css'

export default function Card(props){
        return(
            <div>
                <div className='card-image'>
                    {props.cardImage},{props.starImage}
                    <div>
                       <img className='suwming' src={swimmer}></img>
                    </div>
                    <div>
                       <img className='star1' src={star1}></img>
                       <label className='ratings'>5.0</label>
                       <label className='rating-count'>(50)</label>
                       <label className='country'>US</label>
                    </div>
                    <div>
                    <label className='card-txt'>Life lessons with Katie Zaferes</label>
                    </div>
                    <div>
                      <label className='card-price'>  From $136 / person</label>
                    </div>
                     <p> This is a card component</p>
                </div>

                </div>
           
               
          
        )
}