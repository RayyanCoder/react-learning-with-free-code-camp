import logo from './logo.svg';
import Navbar from './components/Navbar';
import Meme from './components/Meme';
import Stateexample   from './components/Stateexample';
import './App.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Meme/>
      <Stateexample/>
    </div>
  );
}

export default App;
