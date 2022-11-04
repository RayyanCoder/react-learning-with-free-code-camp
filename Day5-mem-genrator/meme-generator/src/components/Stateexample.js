import React from 'react';
import ReactDOM from 'react-dom';

export default function ExampleState(){
    let arrayState = ['car 1','car 2'];
    let newArray = arrayState.map(state=><p>{state}</p>);
    let [getContent,setContent] = React.useState(newArray);
    // let [getColor,setColor] = React.useState({
    //   name:"ferrari",
    //   price:230000,
    //   color:'green'
    // });
    
    function display(){
      setContent(previouse=>{
        return[...previouse,<p>car  {previouse.length+1}</p>]
      });
      
      // setColor(previouseColor=>{
      //   const newColor = previouseColor.color === 'green'?'red':previouseColor.color;
      //   return[...previouseColor,previouseColor.color=newColor];
      // })

    }
    return(
        <div>
            <button type='button' onClick={display}>click on me</button>
            {getContent}
            {/* ferrari color is {getColor} */}
        </div>
    );
}