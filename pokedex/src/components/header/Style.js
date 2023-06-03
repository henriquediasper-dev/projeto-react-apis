import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 15vh;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  background: #ffffff;
  font-family: "Poppins", sans-serif;
`;

export const Logo = styled.img`
  max-width: 15vw;
  min-width: 10vw;
`;

export const PokedexButton = styled.button`
  width: 15vw;
  min-height: 8vh;
  max-height: 12vh;
  background: #33a4f5;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-size: 1.5vw;
`;

export const HomeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 14vw;
  height: 12vh;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5vw;
  img {
    height: 1vw;
  }
`;

// background-color: #33a4f5;

//   height: 2rem;
//   cursor: pointer;
//   border-radius: 1.5rem;
//   padding: 0.5rem 1rem;

//   color: #465188;
//   font-weight: bold;
//   font-size: 13px;
//   border: none;
//   width: 10%;
//   position: relative;
//   left: 50%;
//   transform: translateX(-50%);
