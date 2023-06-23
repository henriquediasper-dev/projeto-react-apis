import { useEffect, useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [pokedex, setPokedex] = useState([]);
  const [pokemonGlobal, setPokemonGlobal] = useState({});

  // Estado para armazenar os dados dos pokémons
  const [pokemons, setPokemons] = useState([]);

  const catchPokemon = (pokemon) => {
    setPokedex([...pokedex, pokemon]);
    const newPokemons = pokemons.filter((poke) => pokemon.id !== poke.id);
    setPokemons(newPokemons);
  };

  const releasePokemon = (id) => {
    setPokedex(pokedex.filter((pokemon) => pokemon.id !== id));
  };

  useEffect(() => {
    const pokemonsOnLocalStorage = JSON.parse(localStorage.getItem("pokemons"));
    pokemonsOnLocalStorage
      ? setPokedex(pokemonsOnLocalStorage)
      : setPokedex([]);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("pokemons", JSON.stringify(pokedex));
    }, 200);
  }, [pokedex]);

  return (
    <GlobalContext.Provider
      value={{
        pokedex,
        setPokedex,
        catchPokemon,
        releasePokemon,
        pokemons,
        setPokemons,
        pokemonGlobal,
        setPokemonGlobal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContextProvider;
