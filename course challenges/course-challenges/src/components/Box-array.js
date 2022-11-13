import React from 'react';
import ReactDOM from 'react-dom';
import box from './../data/box';
import data from './../data/box';
import './../styles/boxStyle.css';

export default function BoxArray(props){
    // const [getBox,setBox] = React.useState(data);
    // console.log(getBox);
    const style={
        background:props.mode.on === true ? '#222222':'#cccccc' ,
        color:'#ffff'
    }
    // const boxArray =  getBox.map(box =>{
    //     return 
    // });
    console.log(props.mode.on);
    return(
        <div style={style} className='box-style'>
           <p>{props.mode.id}</p>
           <p>{props.mode.on}</p>
         </div>
    )
}
