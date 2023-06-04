import React, { useState } from "react";
import { Header } from "./components/header/Header";
import GlobalStyles from "./GlobalStyles";
import { PokemonListPage } from "./pages/pokemonListPage/PokemonListPage";
import { PokedexPage } from "./pages/pokedexPage/PokedexPage";
import { PokemonCard } from "./components/pokemonCard/PokemonCard";

export const App = () => {
  const [currentPage, setCurrentPage] = useState("pokemonList");

  const handlePokedexClick = () => {
    setCurrentPage("pokedex");
  };

  const handleAllPokemonClick = () => {
    setCurrentPage("pokemonCard");
  };

  return (
    <>
      <GlobalStyles />
      <Header
        onPokedexClick={handlePokedexClick}
        onAllPokemonClick={handleAllPokemonClick}
      />
      {currentPage === "pokemonList" && <PokemonListPage />}
      {currentPage === "pokedex" && <PokedexPage />}
      {currentPage === "pokemonCard" && <PokemonCard />}
    </>
  );
};
