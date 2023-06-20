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
  const [pokemonOnPokedex, setPokemonOnPokedex] = useState(true);
  const { pokedex } = useContext(GlobalContext);
  const navigate = useNavigate();

  const pokemon = { name: name, image: image, id: id, types: types };
  const { catchPokemon } = useContext(GlobalContext);

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="10%"
      backdropBlur="3px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  useEffect(() => {
    if (location.pathname === "/") {
      setPokemonOnPokedex(pokedex.find((pokemon) => pokemon.id === id));
    }
  });

  return (
    <>
      <Flex
        h={"16.438rem"}
        w={"27.5rem"}
        alignItems={"flex-end"}
        position={"relative"}
      >
        <Image
          h="12.063rem"
          w="12.063rem"
          src={image}
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
          backgroundColor={tema.colors.backgroundCard[types[0].type.name]}
          borderRadius={"0.75rem"}
        >
          <Text
            fontSize={"1rem"}
            fontFamily={"Inter"}
            position={"absolute"}
            top={"1.563rem"}
            left={"1.438rem"}
          >
            #{id}
          </Text>
          <Text
            fontSize={"2rem"}
            fontFamily={"Inter"}
            position={"absolute"}
            top={"2.5rem"}
            left={"1.438rem"}
          >
            {name}
          </Text>
          <Flex position={"absolute"} left={"1.438rem"} top={"5.563rem"}>
            {types.map((type) => (
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
          {!pokemonOnPokedex && (
            <Button
              w={"9.125rem"}
              h={"2.375rem"}
              fontWeight={400}
              position={"absolute"}
              right={"1.375rem"}
              bottom={"1.25rem"}
              fontSize={"1rem"}
              fontFamily={"Poppins"}
              onClick={() => {
                catchPokemon(pokemon);
                setOverlay(<OverlayTwo />);
                onOpen();
              }}
            >
              Capturar!
            </Button>
          )}
        </Box>
      </Flex>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Gotcha!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>O pokemon foi adicionado à sua pokédex</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
