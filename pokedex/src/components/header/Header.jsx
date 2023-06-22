import React from "react";
import logo from "../../assets/logo-pokemon.svg";
import {
  ButtonAddPokemon,
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
import { useContext } from "react";
import { GlobalContext } from "../../context/globalContext";
import { useState } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const { pokemonGlobal, catchPokemon, releasePokemon, pokedex } =
    useContext(GlobalContext);
  const [isOnPokedex, setIsOnPokedex] = useState(false);
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

      {location.pathname.includes("/detail") &&
        (pokedex.find((pokemon) => pokemonGlobal.id === pokemon.id) ? (
          <ButtonRemovePokemon
            onClick={() => (
              releasePokemon(pokemonGlobal.id), goToPokedexPage(navigate)
            )}
          >
            Excluir da Pokédex
          </ButtonRemovePokemon>
        ) : (
          <ButtonAddPokemon
            onClick={() => (
              catchPokemon(pokemonGlobal), goToPokedexPage(navigate)
            )}
          >
            Adicionar à Pokédex!
          </ButtonAddPokemon>
        ))}
    </Container>
  );
};
