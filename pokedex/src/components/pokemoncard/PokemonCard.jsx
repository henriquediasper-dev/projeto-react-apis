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
import { goToDetailPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import pokemonTypes from "../../pokemonTypes";

export const PokemonCard = ({ name, image, id, types }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <PokemonImage src={image} alt="Pokemon" />
      <CardBox types={types}>
        <InfoBox>
          <BoxInfoAndType>
            <IdPokemon>ID</IdPokemon>
            <NomePokemon>
              {name}
              {id}
            </NomePokemon>
            {types.map((type) => (
              <TypeImage
                key={type.type.name}
                src={pokemonTypes[type.type.name]}
                alt={type.type.name}
              />
            ))}
          </BoxInfoAndType>
          <DetailButton
            onClick={() => {
              goToDetailPage(navigate);
            }}
          >
            <u>Detalhes</u>
          </DetailButton>
        </InfoBox>
      </CardBox>
      <temas />
      <CapturarButton>Capturar!</CapturarButton>
    </Container>
  );
};
