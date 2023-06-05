import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Searchbar from './SearchBar';
import Burguernav from './BurguerNav';
import AppContainer from './AppRedux';
import { activateGeod, closeGeod } from './redux';

import Portafolio from './Portafolio';

const App = () => {
  return (
    <div className="app">
      <Portafolio />
      <Burguernav/>
    </div>
  );
}

export default App;

