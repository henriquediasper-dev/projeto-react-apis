import { useEffect, useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

// Estado para armazenar o Pokémon global selecionado
const GlobalContextProvider = ({ children }) => {
  const [pokedex, setPokedex] = useState([]);
  const [pokemonGlobal, setPokemonGlobal] = useState({});

  // Estado para armazenar os dados dos pokémons
  const [pokemons, setPokemons] = useState([]);

  // Função para capturar um pokémon e adiciona-lo à Pokédex
  const catchPokemon = (pokemon) => {
    setPokedex([...pokedex, pokemon]);
    const newPokemons = pokemons.filter((poke) => pokemon.id !== poke.id);
    setPokemons(newPokemons);
  };

  // Função que libera um pokémon da pokédex
  const releasePokemon = (id) => {
    setPokedex(pokedex.filter((pokemon) => pokemon.id !== id));
  };

  // Efeito que carrega os dados da pokédex do armazenamento local
  useEffect(() => {
    const pokemonsOnLocalStorage = JSON.parse(localStorage.getItem("pokemons"));
    pokemonsOnLocalStorage
      ? setPokedex(pokemonsOnLocalStorage)
      : setPokedex([]);
  }, []);

  // Efeito que salva os dados da pokédex no armazenamento local
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
