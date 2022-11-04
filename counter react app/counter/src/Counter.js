import React from 'react';
import ReactDOM from 'react-dom';
import Countchild  from './Countchild';
import './counter.css';

export default function Counterss(){
    const [getCount,setCount]=React.useState(1);
    function decrement(){
        
        setCount(count=>count = count+1);
    }
    function increment(){
        
        setCount(count=>count=count-1);
    }
    return(
        <div>
       <div className='main-counter'>
           
            <div className='increment' for="increment" onClick={decrement}>
            <h3>+</h3>
            </div>
            <div className='count' for="count">
                <h1>{getCount}</h1>
            </div>
            <div className='decrement' for="decrement" onClick={increment}>
            <h3>-</h3>
            </div>
       </div>
            <Countchild
            count={getCount}
            />
    </div>
    );
  
}