export const  searchPokemon = async (Pokemon)   => {
    try{
        let url = `https://pokeapi.co/api/v2/pokemon/${Pokemon}`
        const response = await fetch(url);
        const data = await response.json()  
        return data;  
    }catch(err){

    }
}