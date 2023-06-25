import React from "react";
import logo from "../../assets/logo-pokemon.svg";
import {
  ButtonAddPokemon,
  ButtonRemovePokemon,
  Container,
  HomeStyledButton,
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
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

export const Header = () => {
  // Importação de hooks e contexto necessários
  const navigate = useNavigate(); // Hook de navegação do React Router
  const { pokemonGlobal, catchPokemon, releasePokemon, pokedex } =
    useContext(GlobalContext); // Uso do contexto GlobalContext para acessar os dados e funções necessárias
  const [selectButton, setSelectButton] = useState(""); // Estado local para controlar o botão selecionado

  const location = useLocation(); // Hook do React Router para obter a localização atual da página

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="10%"
      backdropBlur="3px"
    />
  ); // Componente OverlayTwo com outro estilo específico para o ModalOverlay

  const { isOpen, onOpen, onClose } = useDisclosure(); // Obtém os estados e as funções do hook useDisclosure
  const [overlay, setOverlay] = useState(<OverlayTwo />); // Define um estado para overlay

  const handleButtonClick = () => {
    onClose();
    if (
      pokedex.find((pokemon) => pokemon.id === pokemonGlobal.id) &&
      selectButton === "remover"
    ) {
      // Remova o Pokémon da Pokédex
      releasePokemon(pokemonGlobal.id);
    } else {
      // Capture o Pokémon e adicione-o à Pokédex
      catchPokemon(pokemonGlobal);
    }
    // depois de adiocinar o pokemon muda para pagina Pokedex
    goToPokedexPage(navigate);
  };

  return (
    <Container>
      {location.pathname !== "/" && (
        <HomeStyledButton
          onClick={() => {
            goToHome(navigate);
          }}
        >
          <Lt src={menorQue} alt="" />
          <u>Todos Pokemons</u>
        </HomeStyledButton>
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
            onClick={() => (setSelectButton("remover"), onOpen())}
          >
            Excluir da Pokédex
          </ButtonRemovePokemon>
        ) : (
          <ButtonAddPokemon onClick={() => onOpen()}>
            Adicionar à Pokédex!
          </ButtonAddPokemon>
        ))}

      <Modal isCentered isOpen={isOpen} onClose={() => handleButtonClick()}>
        {overlay}
        <ModalContent>
          <ModalHeader>
            {" "}
            {pokedex.find((pokemon) => pokemon.id === pokemonGlobal.id)
              ? "Oh No!"
              : "Gotcha!"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              {pokedex.find((pokemon) => pokemon.id === pokemonGlobal.id)
                ? "O pokemon foi removido da sua pokédex"
                : "O pokemon foi adicionado à sua pokédex"}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleButtonClick}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};
