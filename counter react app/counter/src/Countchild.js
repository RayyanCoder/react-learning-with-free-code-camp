import React from 'react';
import ReactDOM from 'react-dom';
import './counter.css';

export default function Countchild(props){
    return(
        <div className='countchild'>
        {props.count}
        {console.log(props.count)}
        </div>
    );
}