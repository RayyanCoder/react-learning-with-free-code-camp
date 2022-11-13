import logo from './logo.svg';
import './App.css';
import BoxModel from './components/Box-array';
import boxData from './../src/data/box';

function App() {

  const boxyAray = boxData.map(box=>{
        return   <BoxModel mode={box} />
  });
  
  return (
    <div >
      {boxyAray}
    </div>
  );
}

export default App;
