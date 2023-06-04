import React from "react";
import logo from "../../assets/logo-pokemon.svg";
import { Container, HomeButton, Logo, PokedexButton } from "./Style";
import menorQue from "../../assets/menorQue.svg";

export const Header = ({ onPokedexClick, onAllPokemonClick }) => {
  return (
    <Container>
      <HomeButton onClick={onAllPokemonClick}>
        <img src={menorQue} alt="" />
        <u>Todos Pokemons</u>
      </HomeButton>
      <Logo src={logo} alt="logo pomekon" />
      <div>
        <PokedexButton onClick={onPokedexClick}>Pokédex</PokedexButton>
      </div>
    </Container>
  );
};
