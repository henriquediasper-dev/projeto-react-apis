import pokeballBackground from "../../assets/bigPokebola.svg";
import {
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
import pokemonImageDetail from "../../assets/pokemonDetailPage.svg";
import grassType from "../../assets/grassTypeIcon.svg";
import poisonType from "../../assets/poisonTypeIcon.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";
import pokemonTypes from "../../pokemonTypes";
import pokeBallGif from "../../assets/pokeball-gif.gif";

export default function PokemonDetailPage() {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  const status = [45, 49, 49, 65, 65, 45];
  const moves = ["Razor Wind", "Sword Dance", "Cut", "Vine Whip"];
  const id = useParams();
  console.log(id);

  useEffect(() => {
    api
      .get("/pokemon/" + id.id)
      .then((response) => {
        setTimeout(() => {
          setPokemon(response.data);
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return (
      <>
        <img src={pokeBallGif} alt="pokebola" />
      </>
    );
  }

  let moveCount = 0;

  let total = 0;
  if (!loading) {
    for (const stat of pokemon.stats) {
      total += stat.base_stat;
    }
  }

  return (
    <>
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
              {pokemon.stats.map((stat, i) => {
                let statName = stat.stat.name;
                if (statName === "special-attack") statName = "Sp. Atk";
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
