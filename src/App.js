import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Searchbar from './SearchBar';
import Burguernav from './BurguerNav';
import AppContainer from './AppRedux';
import { activateGeod, closeGeod } from './redux';



import {createStore} from 'redux';

function App() {
  return (
    <div className="PokeDex">
      <Navbar/>
    <div className="App">
      <h1>Pokedex</h1>
      <Searchbar/>
      <Burguernav/>
      <button id="incrementar">Incrementar</button>
<button id="decrementar">Decrementar</button>
<div id="state"></div>
      
    
       
    </div>

    </div>
  );
}


export default App;
