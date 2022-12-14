import logo from './logo.svg';
import React from 'react'
import { ReactDOM } from 'react-dom';
import './App.css';

function App() {

  const [startWarData,setStartWarData] = React.useState({})
  console.log('hello world');

  fetch('https://swapi.dev/api/people/2').then(res=>res.json()).then(data=>setStartWarData(data));
  return (
    <div className="App">
        Api Calls in React

        <pre>{JSON.stringify(startWarData,null,2,)}</pre>
    </div>
  );
}

export default App;
