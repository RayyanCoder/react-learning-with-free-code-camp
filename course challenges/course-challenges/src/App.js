import logo from './logo.svg';
import './App.css';
import BoxModel from './components/Box-array';
import boxData from './../src/data/box';

function App() {

  function toggel2(id){

    console.log("you have clicked on ",id);

  }
  const boxyAray = boxData.map(box=>{
        return   <BoxModel mode={box} 
        toggel2={toggel2}
        />
  });
  
  return (
    <div >
      {boxyAray}
    </div>
  );
}

export default App;
