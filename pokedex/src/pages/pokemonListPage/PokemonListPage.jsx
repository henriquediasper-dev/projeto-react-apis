import { PokemonCard } from "../../components/pokemoncard/PokemonCard";
import { CardsContainer, TituloDaPagina } from "./Style";

export const PokemonListPage = () => {
  return (
    <>
      <TituloDaPagina>Todos Pokémons</TituloDaPagina>
      <CardsContainer>
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </CardsContainer>
    </>
  );
};
