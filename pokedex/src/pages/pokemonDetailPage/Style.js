import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
export const PokeBallBackground = styled.img`
  position: absolute;
  top: -1%;
  left: 5%;
  width: 85%;
`;

export const InfosBox = styled.div`
  margin-top: 4%;
  width: 98%;
  height: 90%;
  background: #729f92;
  border-radius: 1.9vw;
  display: flex;
  position: relative;
  z-index: 1;
`;

export const PokeballDetail = styled.img`
  position: absolute;
  height: 100%;
  right: 0;
`;

export const PokemonImage = styled.img`
  width: 18%;
  position: absolute;
  right: 6%;
  top: -17%;
`;

export const InfosContainer = styled.div`
  padding: 2% 2% 2% 2%;
  display: flex;
  justify-content: space-between;
  width: 76%;
`;

export const PicsContainer = styled.div`
  height: 100%;
  width: 32%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Pic1 = styled.div`
  height: 45%;
  width: 100%;
  background-color: white;
  border-radius: 0.4vw;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 50%;
  }
`;
export const Pic2 = styled.div`
  height: 45%;
  width: 100%;
  background-color: white;
  border-radius: 0.4vw;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 50%;
  }
`;

export const StatsContainer = styled.div`
  height: 100%;
  width: 32%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2%;
  border-radius: 0.4vw;
  h2 {
    font-size: 2.5vw;
    font-weight: bolder;
    font-family: "Inter", sans-serif;
  }
`;
export const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 2%;
  width: 100%;
  margin-top: 3%;
  font-size: 1vw;
  border-top: 0.1vw dashed rgba(245, 222, 179, 0.5);
  border-bottom: 0.1vw dashed rgba(245, 222, 179, 0.5);
  padding: 2% 0 2% 0;
  text-align: right;
  span:nth-child(1) {
    width: 30%;
    padding-right: 2%;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  &::before {
    border-radius: 2vw;
    content: "";
    width: calc(${(props) => props.stat} * 1%);
    background-color: hsl(calc(${(props) => props.stat} * 0.8), 70%, 50%);
  }
`;

export const MovesAndInfosContainer = styled.div`
  height: 100%;
  width: 32%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NameIdTypeBox = styled.div`
  padding: 2%;
  display: flex;
  flex-direction: column;
  color: #ffffff;

  p:nth-child(1) {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 1vw;
  }

  p:nth-child(2) {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 3vw;
  }
`;
export const TypesBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4%;
  width: fit-content;
`;

export const MovesBox = styled.div`
  background-color: white;
  border-radius: 0.4vw;
  display: flex;
  flex-direction: column;
  height: 80%;
  padding: 5%;
  p {
    padding: 3%;
    margin-top: 5%;
    background: #ececec;
    border: 1px dashed rgba(0, 0, 0, 0.14);
    border-radius: 12px;
    width: fit-content;
  }
`;
