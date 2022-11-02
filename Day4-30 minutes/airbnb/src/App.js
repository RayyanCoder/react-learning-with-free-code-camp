import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Card from './component/Card';

function App() {
  return (
   <div>
    <Navbar/>
    <Hero />
    <div className='card-app'>
      <Card  cardImage="rayyan" starImage="shaikh"/>
      <Card />
    </div>
  
   </div>
  );
}

export default App;
