import React, { useState } from "react";
import { searchPokemon } from './pokeapi';

const Burguernav = () => {
    return (

        <div class="navigation">
      <input type="checkbox" class="navigation__checkbox" id="navi-toggle"/>

      <label for="navi-toggle" class="navigation__button">
          <span class="navigation__icon">&nbsp;</span>
      </label>

      <div class="navigation__background">&nbsp;</div>

      <nav class="navigation__nav">
          <ul class="navigation__list">
              <li class="navigation__item"><a href="index.js" class="navigation__link">Pokemones</a></li>
              <li class="navigation__item"><a href="AppRedux.js" class="navigation__link">Contacto</a></li>
              
          </ul>
      </nav>
  </div>
  
    );
};


export default Burguernav;