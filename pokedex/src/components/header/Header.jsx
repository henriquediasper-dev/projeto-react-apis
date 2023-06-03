import React from "react";
import logo from "../../assets/logo-pokemon.svg";
import { Container, HomeButton, Logo, PokedexButton } from "./Style";
import menorQue from "../../assets/menorQue.svg";

export const Header = () => {
  return (
    <Container>
      <HomeButton>
        <img src={menorQue} alt="" />
        <u>Todos Pokemons</u>
      </HomeButton>
      <Logo src={logo} alt="logo pomekon" />

      <PokedexButton>Pokédex</PokedexButton>
    </Container>
  );
};
