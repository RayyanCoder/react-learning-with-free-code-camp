import React from 'react';
import swimmer from './../images/card/image 12.png';
import star1 from './../images/card/Star 1.png';

import './../styles/cardStyle.css'

export default function Card(props){
    let bage="AVALIABLE";
    if(props.openSports == 0){
      bage="SOLD OUT";
  }

        return(
            <div>
              <div className='bage'>
                {bage}
              </div>
                <div className='card-image'>
                    {props.cardImage},{props.starI}
                    <div>
                       <img className='suwming' src={props.coverImage}></img>
                    </div>
                    <div>
                       <img className='star1' src={star1}></img>
                       <label className='ratings'>{props.status.raitng }</label>
                       <label className='rating-count'> { props.status.reviewCount}</label>
                       <label className='country'> { props.location}</label>
                    </div>
                    <div>
                    <label className='card-txt'>{props.title}</label>
                    </div>
                    <div>
                      <label className='card-price'>  From ${props.price} / person</label>
                    </div>
                </div>

                </div>
  
               
          
        )
}