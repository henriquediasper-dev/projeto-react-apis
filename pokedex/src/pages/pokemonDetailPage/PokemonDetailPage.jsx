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

export default function PokemonDetailPage() {
  const status = [45, 49, 49, 65, 65, 45];
  const moves = ["Razor Wind", "Sword Dance", "Cut", "Vine Whip"];
  return (
    <>
      <h1>Detalhes</h1>
      <PokeBallBackground src={pokeballBackground} alt="" />
      <Container>
        <InfosBox>
          <PokeballDetail src={pokeballDetail} alt="pokeball" />
          <PokemonImage src={pokemonImageDetail} alt="" />

          <InfosContainer>
            <PicsContainer>
              <Pic1>
                <img src={pokemonImageDetail} alt="" />
              </Pic1>
              <Pic2>
                <img src={pokemonImageDetail} alt="" />
              </Pic2>
            </PicsContainer>
            <StatsContainer>
              <h2>Base stats</h2>
              <Stats>
                <span>HP</span>
                <span>{status[0]}</span>

                <ProgressBar stat={status[0]}></ProgressBar>
              </Stats>
              <Stats>
                <span>Attack</span>
                <span>{status[1]}</span>
                <ProgressBar stat={status[1]}></ProgressBar>
              </Stats>
              <Stats>
                <span>Defense</span>
                <span>{status[2]}</span>
                <ProgressBar stat={status[2]}></ProgressBar>
              </Stats>
              <Stats>
                <span>Sp. Atk</span>
                <span>{status[3]}</span>
                <ProgressBar stat={status[3]}></ProgressBar>
              </Stats>
              <Stats>
                <span>Sp. Def</span>
                <span>{status[4]}</span>
                <ProgressBar stat={status[4]}></ProgressBar>
              </Stats>
              <Stats>
                <span>Speed</span>
                <span>{status[5]}</span>
                <ProgressBar stat={status[5]}></ProgressBar>
              </Stats>
              <Stats>
                <p>Total</p>
                <span>318</span>
              </Stats>
            </StatsContainer>
            <MovesAndInfosContainer>
              <NameIdTypeBox>
                <p>#01</p>
                <p>Bulbasaur</p>
                <TypesBox>
                  <img src={grassType} alt="" />
                  <img src={poisonType} alt="" />
                </TypesBox>
              </NameIdTypeBox>
              <MovesBox>
                <h2>Moves:</h2>
                {moves.map((move) => {
                  return <p>{move}</p>;
                })}
              </MovesBox>
            </MovesAndInfosContainer>
          </InfosContainer>
        </InfosBox>
      </Container>
    </>
  );
}
