import React, { useState } from "react";
import { searchPokemon } from './pokeapi';


const Searchbar = () => {
    const [busqueda, setpokimon] = useState ('');
    const [objetopokemon, setPokemon] = useState();

    const onChange = (evt) =>{
        
        setpokimon(evt.target.value);
    }

    const onClick = async (e) => {
        const data = await searchPokemon(busqueda);
        setPokemon(data);
        console.log(objetopokemon);
    }
    return (
        <div>
            <div>
                <input placeholder="Buscar pokemon" onChange={onChange}/>
            </div>
            <div><a href="#" onClick={onClick} class="float"> <img src="https://www.pngall.com/wp-content/uploads/8/Vector-Search.png" className="SearchLogo"/></a></div>
            <div>
                {   
                    objetopokemon && 
                    <div>
                        <div className="Typography">{objetopokemon.name}</div>
                        <div className="Typography">Peso: {objetopokemon.weight}</div>
                        <div className="Capsule">{objetopokemon.types[0].type.name}</div>
                        <div className="PokeImage">
                            <img src={objetopokemon.sprites.front_default }  />
                        </div>
                        

                    </div>
                }
            </div>
        </div>
    
    );
};

export default Searchbar;