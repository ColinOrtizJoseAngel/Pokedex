import React, { useEffect, useState } from "react";
import { searchPokemon } from './pokeapi';

const Burguernav = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const fetchPokemonData = async (pokemonName) => {
    try {
      const response = await searchPokemon(pokemonName);
      setPokemonData(response);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  useEffect(() => {
    fetchPokemonData("pikachu"); // Aquí puedes cambiar "pikachu" por el nombre del Pokémon que desees
  }, []);

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchPokemonData(searchInput.toLowerCase());
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navigation ${menuOpen ? 'open' : ''}`}>
      <input type="checkbox" className="navigation__checkbox" id="navi-toggle" defaultChecked={false} />

      <label htmlFor="navi-toggle" className="navigation__button" onClick={handleMenuToggle}>
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <div className="search-bar">
          <form onSubmit={handleSearchSubmit}>
            <input type="text" value={searchInput} onChange={handleSearchChange} placeholder="Search Pokémon..." />
            <button type="submit" className="button">Search</button>
          </form>
        </div>

        {pokemonData && (
          <div className="pokemon-info">
            <div className="pokemon-image">
              <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
            </div>
            <div className="pokemon-details">
              <h3>{pokemonData.name}</h3>
              <p>Height: {pokemonData.height}</p>
              <p>Weight: {pokemonData.weight}</p>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Burguernav;