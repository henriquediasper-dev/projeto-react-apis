import { useContext } from "react";
import { GlobalContext } from "../../context/globalContext";
import { PokemonCard } from "../../components/pokemoncard/PokemonCard";

export const PokedexPage = () => {
  const { pokedex } = useContext(GlobalContext);

  const handleRemove = (pokemonId) => {
    releasePokemon(pokemonId);
  };

  return (
    <>
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
    </>
  );
};
