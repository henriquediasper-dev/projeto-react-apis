import { PokemonCard } from "../../components/pokemoncard/PokemonCard";
import { CardsContainer, TituloDaPagina } from "./Style";
import { api } from "../../api";
import { useEffect } from "react";
import { useState } from "react";

export const PokemonListPage = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api.get("/pokemon").then((res) => {
      const results = res.data.results;
      console.log(results);
      const promise = results.map((result) => api.get(result.url));
      Promise.all(promise).then((responses) => {
        const pokemonData = responses.map((res) => res.data);
        console.log(pokemonData);
        setPokemons(pokemonData);
      });
    });
  }, []);

  return (
    <>
      <TituloDaPagina>Todos Pokémons</TituloDaPagina>
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
