import React from 'react';
import ReactDOM from 'react-dom';

export default function  Counts(){

    React.useEffect(()=>{
        window.addEventListener("resize",function(){
            console.log('resizing windows');
        });
    },[])
    return(<div>
       <h1>Window Width:{window.innerWidth}</h1>
    </div>)
}