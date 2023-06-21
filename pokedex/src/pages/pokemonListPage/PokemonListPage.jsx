import { PokemonCard } from "../../components/pokemoncard/PokemonCard";
import { CardsContainer, TituloDaPagina } from "./Style";
import { api } from "../../api";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { GlobalContext } from "../../context/globalContext";

export const PokemonListPage = () => {
  // Estado para armazenar os dados dos pokémons
  const { pokemons, setPokemons } = useContext(GlobalContext);

  useEffect(() => {
    // Chamada à API para obter a lista de pokémons
    api.get("/pokemon").then((res) => {
      const results = res.data.results;
      console.log(results);

      // Cria um array de promises para buscar os dados de cada pokémon individualmente
      const promise = results.map((result) => api.get(result.url));

      // Executa todas as promises e aguarda as respostas
      Promise.all(promise).then((responses) => {
        // Mapeia as respostas e extrai os dados de cada pokémon
        const pokemonData = responses.map((res) => res.data);
        console.log(pokemonData);

        // Atualiza o estado com os dados dos pokémons
        setPokemons(pokemonData);
      });
    });
  }, []);

  return (
    <>
      {/* Título da página */}
      <TituloDaPagina>Todos Pokémons</TituloDaPagina>

      {/* Container para os cards dos pokémons */}
      <CardsContainer>
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            types={pokemon.types}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          ></PokemonCard>
        ))}
      </CardsContainer>
    </>
  );
};
