import { useContext } from "react";
import { GlobalContext } from "../../context/globalContext";
import { PokemonCard } from "../../components/pokemoncard/PokemonCard";

export const PokedexPage = () => {
  const { pokedex } = useContext(GlobalContext);

  return (
    <>
      {pokedex.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          id={pokemon.id}
          types={pokemon.types}
          image={pokemon.image}
        ></PokemonCard>
      ))}
    </>
  );
};
