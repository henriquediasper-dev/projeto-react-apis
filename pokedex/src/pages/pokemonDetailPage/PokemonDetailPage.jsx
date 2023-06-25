import pokeballBackground from "../../assets/bigPokebola.svg";
import {
  ChamanderGifLoading,
  Container,
  InfosBox,
  InfosContainer,
  MovesAndInfosContainer,
  MovesBox,
  NameIdTypeBox,
  Pic1,
  Pic2,
  PicsContainer,
  PokeBallBackground,
  PokeballDetail,
  PokemonImage,
  ProgressBar,
  Stats,
  StatsContainer,
  TypesBox,
} from "./Style";
import pokeballDetail from "../../assets/pokeballDetailInsideBackground.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";
import pokemonTypes from "../../pokemonTypes";
import charmanderGif from "../../assets/slap-ricky-berwick-gif.gif";

export default function PokemonDetailPage() {
  const [pokemon, setPokemon] = useState({}); // Estado para armazenar os dados do Pokémon
  const [loading, setLoading] = useState(true); // Estado para indicar se os dados estão sendo carregados

  // const status = [45, 49, 49, 65, 65, 45]; // Array com os valores dos status do Pokémon
  // const moves = ["Razor Wind", "Sword Dance", "Cut", "Vine Whip"]; // Array com os movimentos do Pokémon

  const id = useParams(); // Obtém o parâmetro 'id' da URL usando o hook useParams()

  // Efeito para fazer a requisição à API quando o componente é montado
  useEffect(() => {
    api
      .get("/pokemon/" + id.id) // Concatena o parâmetro 'id' na URL da requisição
      .then((response) => {
        setTimeout(() => {
          setPokemon(response.data); // Atualiza o estado 'pokemon' com os dados da resposta
          setLoading(false); // Define 'loading' como falso para indicar que os dados foram carregados
        }, 3000); // Atraso de 3 segundos para simular o carregamento dos dados
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    // Se 'loading' for verdadeiro, mostra um elemento JSX enquanto os dados estão sendo carregados
    return (
      <ChamanderGifLoading>
        <img src={charmanderGif} alt="pokebola" />
      </ChamanderGifLoading>
    );
  }

  let moveCount = 0; // variável para contar os movimentos

  let total = 0; // variável que armazena o valor totals dos stats do pokémon
  if (!loading) {
    // Se loading for falso (ou seja, os dados foram carregados)
    for (const stat of pokemon.stats) {
      //loop pelos stats do pokemon
      total += stat.base_stat; // Soma o valor 'base_stat' de cada stat a 'total'
    }
  }

  return (
    <>
      {/* Renderização do plano de fundo da Pokébola */}
      <PokeBallBackground src={pokeballBackground} alt="" />

      <Container>
        <InfosBox types={pokemon.types}>
          <PokeballDetail src={pokeballDetail} alt="pokeball" />
          <PokemonImage
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt=""
          />

          <InfosContainer>
            <PicsContainer>
              <Pic1>
                <img
                  src={
                    pokemon.sprites.versions["generation-v"]["black-white"]
                      .animated.front_default
                  }
                  alt=""
                />
              </Pic1>
              <Pic2>
                <img
                  src={
                    pokemon.sprites.versions["generation-v"]["black-white"]
                      .animated.back_default
                  }
                  alt=""
                />
              </Pic2>
            </PicsContainer>
            <StatsContainer>
              <h2>Estatísticas Básicas</h2>
              {/* Mapeamento das estatísticas do Pokémon */}
              {pokemon.stats.map((stat, i) => {
                let statName = stat.stat.name;
                if (statName === "special-attack")
                  statName =
                    "Sp. Atk"; // tratamento dos nomes das estatisticas especiais
                else if (statName === "special-defense") statName = "Sp. Def";
                else
                  statName =
                    statName.charAt(0).toUpperCase() + statName.slice(1);

                return (
                  <Stats key={i}>
                    <span>{statName}</span>
                    <span>{stat.base_stat}</span>
                    <ProgressBar stat={stat.base_stat}></ProgressBar>
                  </Stats>
                );
              })}
              <Stats>
                <p style={{ fontWeight: "bold" }}>Total:</p>
                <span>{total}</span>
              </Stats>
            </StatsContainer>
            <MovesAndInfosContainer>
              <NameIdTypeBox>
                <p>{pokemon.id}</p>
                <p>{pokemon.name}</p>
                <TypesBox>
                  {/* exibicao dos tipos de pokemons*/}
                  {pokemon.types.map((type) => {
                    return (
                      <img
                        src={pokemonTypes[type.type.name]}
                        key={type.type.name}
                      />
                    );
                  })}
                </TypesBox>
              </NameIdTypeBox>
              <MovesBox>
                <h2 style={{ fontWeight: "bold" }}>Movimentos:</h2>
                {/* Mapeamento dos movimentos do Pokémon */}
                {pokemon.moves.map((move, i) => {
                  if (moveCount < 6) {
                    moveCount++;
                    return <p key={i}>{move.move.name}</p>;
                  }
                })}
              </MovesBox>
            </MovesAndInfosContainer>
          </InfosContainer>
        </InfosBox>
      </Container>
    </>
  );
}
