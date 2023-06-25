import { useContext } from "react";
import { GlobalContext } from "../../context/globalContext";
import { PokemonCard } from "../../components/pokemoncard/PokemonCard";
import { CardsContainer } from "../pokemonListPage/Style";

export const PokedexPage = () => {
  const { pokedex } = useContext(GlobalContext); // Obtendo o estado 'pokedex' do contexto global

  const handleRemove = (pokemonId) => {
    releasePokemon(pokemonId); // Função para remover um Pokémon da Pokédex
  };

  return (
    <>
      <CardsContainer>
        {/* Renderizando os Pokémon da Pokédex */}
        {pokedex.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            types={pokemon.types}
            image={pokemon.image}
            onRemove={() => handleRemove(pokemon.id)}
          ></PokemonCard>
        ))}
      </CardsContainer>
    </>
  );
};
