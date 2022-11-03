import React from 'react';
import ReactDOM from 'react-dom';

export default function ExampleState(){
    let arrayState = ['car 1','car 2'];
    let newArray = arrayState.map(state=><p>{state}</p>);
    let [getContent,setContent] = React.useState(newArray);
    
    function display(){
      setContent(previouse=>{
        return[...previouse,<p>car {previouse.length+1}</p>]
      });

    }
    return(
        <div>
            <button type='button' onClick={display}>click on me</button>
            {getContent}
        </div>
    );
}