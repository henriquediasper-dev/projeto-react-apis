import { PokemonCard } from "../../components/pokemoncard/PokemonCard";
import { CardsContainer, PikachuGifLoading, TituloDaPagina } from "./Style";
import { api } from "../../api";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { GlobalContext } from "../../context/globalContext";
import pikachuGif from "../../assets/slap-ricky-berwick-gif.gif";
import { Flex, Button, Spacer } from "@chakra-ui/react";

export const PokemonListPage = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [previous, setPrevious] = useState(true);
  const [next, setNext] = useState(true);

  // Estado para armazenar os dados dos pokémons
  const { pokemons, setPokemons } = useContext(GlobalContext);

  // Chamada à API para obter a lista de pokémons
  useEffect(() => {
    setLoading(true);
    api
      .get("/pokemon/", {
        params: {
          limit: 30,
          offset: page * 30,
        },
      })
      .then((res) => {
        const results = res.data.results;
        setPrevious(res.data.previous);
        setNext(res.data.next);
        console.log(results);

        // Cria um array de promises para buscar os dados de cada pokémon individualmente
        const promise = results.map((result) => api.get(result.url));

        // Executa todas as promises e aguarda as respostas
        Promise.all(promise).then((responses) => {
          // Mapeia as respostas e extrai os dados de cada pokémon
          const pokemonData = responses.map((res) => res.data);

          // Atualiza o estado com os dados dos pokémons
          setTimeout(() => {
            setPokemons(pokemonData);
            setLoading(false);
          }, 3000);
        });
      });
  }, [page]);

  if (loading) {
    return (
      <PikachuGifLoading>
        <img src={pikachuGif} alt="pokebola" />
      </PikachuGifLoading>
    );
  }

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
      <Flex justifyContent="space-between" marginTop="1rem" padding="1rem">
        <Button hidden={!previous} onClick={() => setPage(page - 1)}>
          Anterior
        </Button>
        {/* <Spacer /> */}
        <Button disabled={!next} onClick={() => setPage(page + 1)}>
          Proximo
        </Button>
      </Flex>
    </>
  );
};
