import React from "react";
import { Header } from "./components/header/Header";
import GlobalStyles from "./GlobalStyles";
import { PokemonListPage } from "./pages/pokemonListPage/PokemonListPage";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <PokemonListPage />
    </>
  );
};
