import logo from './logo.svg';
import React from 'react';
import './App.css';
import Counts from './counter';

function App() {

  const [show,setShow]=React.useState(true);
  function toggleShow(){
    setShow((show)=>{
      return !show;
    });
    console.log(show);

  }
  return (
    <div className="App">
      <button onClick={toggleShow}>Toggole window tracker</button>
        {show && <Counts></Counts>}
    </div>
  );
}

export default App;
