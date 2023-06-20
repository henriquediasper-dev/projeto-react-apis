import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonListPage } from "../pages/pokemonListPage/PokemonListPage";
import PokemonDetailPage from "../pages/pokemonDetailPage/PokemonDetailPage";
import { PokedexPage } from "../pages/pokedexPage/PokedexPage";
import { Header } from "../components/header/Header";

export const Router = () => {
  return (
    // Componente de roteamento do React Router
    <BrowserRouter>
      {/* Componente do cabeçalho */}
      <Header />
      <Routes>
        {/* Rota para a página de listagem de pokémons */}
        <Route index element={<PokemonListPage />} />
        {/* Rota para a página de detalhes do pokémon */}
        <Route path="/detail/:id" element={<PokemonDetailPage />} />
        {/* Rota para a página da pokédex */}
        <Route path="/pokedex" element={<PokedexPage />} />
      </Routes>
    </BrowserRouter>
  );
};
