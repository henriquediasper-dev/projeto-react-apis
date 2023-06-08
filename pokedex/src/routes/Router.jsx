import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonListPage } from "../pages/pokemonListPage/PokemonListPage";
import PokemonDetailPage from "../pages/pokemonDetailPage/PokemonDetailPage";
import { PokedexPage } from "../pages/pokedexPage/PokedexPage";
import { Header } from "../components/header/Header";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<PokemonListPage />} />
        <Route path="/detail" element={<PokemonDetailPage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
      </Routes>
    </BrowserRouter>
  );
};
