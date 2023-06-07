import React from "react";
import logo from "../../assets/logo-pokemon.svg";
import {
  ButtonRemovePokemon,
  Container,
  HomeButton,
  Logo,
  Lt,
  PokedexButton,
} from "./Style";
import menorQue from "../../assets/menorQue.svg";
import { goToHome, goToPokedexPage } from "../../routes/coordinator";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const location = useLocation();

  return (
    <Container>
      {location.pathname !== "/" && (
        <HomeButton
          onClick={() => {
            goToHome(navigate);
          }}
        >
          <Lt src={menorQue} alt="" />
          <u>Todos Pokemons</u>
        </HomeButton>
      )}
      <Logo src={logo} alt="logo pomekon" />

      {location.pathname === "/" && (
        <PokedexButton
          onClick={() => {
            goToPokedexPage(navigate);
          }}
        >
          Pokédex
        </PokedexButton>
      )}

      {location.pathname.includes("/detail") && (
        <ButtonRemovePokemon
          onClick={() => (
            alert("Pokemon Removido da pokedex"), goToPokedexPage(navigate)
          )}
        >
          Excluir da Pokédex
        </ButtonRemovePokemon>
      )}
    </Container>
  );
};
