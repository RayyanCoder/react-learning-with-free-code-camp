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
      id={items.id} 
      title={items.title}
      price={items.price}
      coverImage={items.coverImage}
      status={items.status}
      location={items.location}
      openSports={items.openSports}
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
