import {
  BoxInfoAndType,
  CapturarButton,
  CardBox,
  Container,
  DetailButton,
  IdPokemon,
  InfoBox,
  NomePokemon,
  PokemonImage,
  TypeImage,
} from "./Style";
import pokebola from "../../assets/pokebolaFundo.svg";
import tipo1 from "../../assets/normal.svg";
import snorlax from "../../assets/snorlax.svg";

export const PokemonCard = () => {
  return (
    <Container>
      <PokemonImage src={snorlax} alt="Pokemon" />
      <CardBox>
        <InfoBox>
          <BoxInfoAndType>
            <IdPokemon>ID</IdPokemon>
            <NomePokemon>NOME</NomePokemon>
            <TypeImage src={tipo1} alt="" />
          </BoxInfoAndType>
          <DetailButton>
            <u>Detalhes</u>
          </DetailButton>
        </InfoBox>
        <img src={pokebola} alt="" />
      </CardBox>

      <CapturarButton>Capturar</CapturarButton>
    </Container>
  );
};
