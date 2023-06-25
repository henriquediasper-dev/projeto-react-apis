import pokebola from "../../assets/pokebolaFundo.svg";
import { goToDetailPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import pokemonTypes from "../../pokemonTypes";
import {
  Box,
  Button,
  Flex,
  Image,
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
import tema from "../../tema";
import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context/globalContext";
import { useEffect } from "react";

export const PokemonCard = ({ name, image, id, types }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const [pokemonOnPokedex, setPokemonOnPokedex] = useState(true); // Define um estado para pokemonOnPokedex
  const { pokedex, releasePokemon } = useContext(GlobalContext); // Obtém o contexto pokedex e a função releasePokemon
  const navigate = useNavigate(); // Obtém a função navigate do react-router-dom

  const pokemon = { name: name, image: image, id: id, types: types }; // Cria um objeto pokemon com as propriedades
  const { catchPokemon, setPokemonGlobal } = useContext(GlobalContext); // Obtém a função catchPokemon do contexto

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  ); // Componente OverlayOne com um estilo específico para o ModalOverlay

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

  useEffect(() => {
    if (location.pathname === "/") {
      setPokemonOnPokedex(pokedex.find((pokemon) => pokemon.id === id)); // Atualiza o estado de pokemonOnPokedex com base no valor retornado de pokedex.find
    }
  }); // Executa um efeito quando o componente é renderizado

  // Função para lidar com o clique no botão
  const handleButtonClick = () => {
    onClose();
    if (pokemonOnPokedex) {
      // Remova o Pokémon da Pokédex
      releasePokemon(id);
    } else {
      // Capture o Pokémon e adicione-o à Pokédex
      catchPokemon(pokemon);
    }
  };

  return (
    <>
      <Flex
        h={"16.438rem"}
        w={"26.5rem"}
        alignItems={"flex-end"}
        position={"relative"}
      >
        <Image
          h="12.063rem"
          w="12.063rem"
          src={pokemon.image}
          alt=""
          zIndex={1}
          position={"absolute"}
          top={0}
          right={0}
        />
        <Box
          color={"white"}
          position={"relative"}
          h={"13.125rem"}
          w={"27.5rem"}
          backgroundColor={
            tema.colors.backgroundCard[pokemon.types[0].type.name]
          }
          borderRadius={"0.75rem"}
        >
          <Text
            fontSize={"1rem"}
            fontFamily={"Inter"}
            position={"absolute"}
            top={"1.563rem"}
            left={"1.438rem"}
          >
            #{pokemon.id}
          </Text>
          <Text
            fontSize={"2rem"}
            fontFamily={"Inter"}
            position={"absolute"}
            top={"2.5rem"}
            left={"1.438rem"}
          >
            {pokemon.name}
          </Text>
          <Flex position={"absolute"} left={"1.438rem"} top={"5.563rem"}>
            {pokemon.types.map((type) => (
              <Image
                key={type.type.name}
                src={pokemonTypes[type.type.name]}
                alt={type.type.name}
              />
            ))}
          </Flex>
          <Button
            fontWeight={700}
            position={"absolute"}
            left={"1.438rem"}
            bottom={"1.25rem"}
            bgColor={"transparent"}
            color={"white"}
            border={"none"}
            _hover={"none"}
            _active={"none"}
            zIndex={2}
            onClick={() => {
              setPokemonGlobal(pokemon);
              goToDetailPage(navigate, id);
            }}
          >
            <u>Detalhes</u>
          </Button>

          <Image
            position={"absolute"}
            top={0}
            right={0}
            src={pokebola}
            alt=""
          />
          <Button
            w={"9.125rem"}
            h={"2.375rem"}
            fontWeight={400}
            position={"absolute"}
            right={"1.375rem"}
            bottom={"1.25rem"}
            fontSize={"1rem"}
            fontFamily={"Poppins"}
            background={pokemonOnPokedex && "#FF6262"}
            onClick={() => onOpen()}
          >
            {pokemonOnPokedex ? "Remover!" : "Capturar!"}
          </Button>
        </Box>
      </Flex>
      <Modal isCentered isOpen={isOpen} onClose={() => handleButtonClick()}>
        {overlay}
        <ModalContent>
          <ModalHeader>Gotcha!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              {pokemonOnPokedex
                ? "O pokemon foi removido da sua pokédex"
                : "O pokemon foi adicionado à sua pokédex"}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleButtonClick}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
