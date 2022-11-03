import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Card from './component/Card';
import data from './component/cardData';
console.log(typeof data);

function App() {

  const cards = data.map(items =>{
    return (
      <Card  
      {...items}
      />
    )
  });
  console.log(cards);
  return (
   <div>
    <Navbar/>
    <Hero />
    <div className='card-app'>
      { cards }
    </div>
   </div>
  );
}

export default App;
