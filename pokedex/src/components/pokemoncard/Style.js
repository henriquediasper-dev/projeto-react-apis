import styled from "styled-components";
import tema from "../../tema";

const getBackgroundColor = (types) => {
  if (types.length > 0) {
    if (types[0].type.name === "normal" && types[1]) {
      return tema.colors.backgroundCard[types[1].type.name];
    }
  }
  return tema.colors.backgroundCard[types[0].type.name] || "#ffffff";
};
console.log(tema);

export const Container = styled.div`
  width: 23vw;
  height: 29vh;
  display: flex;
  align-items: end;
  position: relative;
`;

export const CardBox = styled.div`
  width: 29.9vw;
  height: 23vh;
  background-color: ${({ types }) => getBackgroundColor(types)};
  border-radius: 0.6vw;
  display: flex;
  justify-content: space-between;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 1.1vw;
  color: #ffffff;
  overflow: hidden;
`;

export const BoxInfoAndType = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6vh;
`;

export const IdPokemon = styled.p`
  font-size: 0.8vw;
`;
export const NomePokemon = styled.p`
  font-size: 1.6vw;
`;

export const TypeImage = styled.img`
  width: 4.5vw;
`;

export const DetailButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-size: 0.8vw;
  cursor: pointer;
  border: 1px solid orange;
`;

export const PokemonImage = styled.img`
  position: absolute;
  top: -1vh;
  right: 0.4vw;
  width: 10vw;
`;

export const CapturarButton = styled.button`
  position: absolute;
  bottom: 2vh;
  right: 2vw;
  width: 7.6vw;
  height: 4.2vh;
  background: #ffffff;
  border-radius: 0.4vw;
  font-size: 1vw;
  border: none;
`;
