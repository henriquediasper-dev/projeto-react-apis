import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();
const GlobalContextProvider = ({ children }) => {
  const [pokedex, setPokedex] = useState([]);

  // Estado para armazenar os dados dos pokémons
  const [pokemons, setPokemons] = useState([]);

  const catchPokemon = (pokemon, setIsOpen) => {
    setPokedex([...pokedex, pokemon]);
    const newPokemons = pokemons.filter((poke) => pokemon.id !== poke.id);
    setPokemons(newPokemons);
    setIsOpen(true);
  };

  const releasePokemon = (id) => {
    setPokedex(pokedex.filter((pokemon) => pokemon.id !== id));
  };

  return (
    <GlobalContext.Provider
      value={{
        pokedex,
        setPokedex,
        catchPokemon,
        releasePokemon,
        pokemons,
        setPokemons,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContextProvider;
