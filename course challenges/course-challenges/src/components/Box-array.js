import React from 'react';
import ReactDOM from 'react-dom';
import box from './../data/box';
import data from './../data/box';
import './../styles/boxStyle.css';

export default function BoxArray(props){
    // const [getBox,setBox] = React.useState(data);
    // console.log(getBox);
  
    const [getOn,setOn] = React.useState(props.on);
    const style={
        background:getOn ? '#222222':'#cccccc' ,
        color:'#ffff'
    }

    function toggel(){
            setOn(previouse =>{
                return !previouse;
            });
    }
    // const boxArray =  getBox.map(box =>{
    //     return 
    // });
    console.log(props.mode.on);
    return(
        <div onClick={()=>props.toggel2(props.mode.id)} style={style} className='box-style'>
           <p>{props.mode.id}</p>
           <p>{getOn}</p>
         </div>
    )
}
