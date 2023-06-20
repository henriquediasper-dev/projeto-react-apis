import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();
const GlobalContextProvider = ({ children }) => {
  const [pokedex, setPokedex] = useState([]);

  const catchPokemon = (pokemon) => {
    setPokedex([...pokedex, pokemon]);
  };

  return (
    <GlobalContext.Provider value={{ pokedex, setPokedex, catchPokemon }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContextProvider;
