import React from "react";
import logo from "../../assets/images/logo.png"
import { Button, Img, MainContainer } from "./Style";

export const Header = () => {
    return (
        <MainContainer>
        <Img>
        <img src={logo} alt= "logo pomekon" />
        </Img>

        <Button>Pokédex</Button>
        </MainContainer>
        )

}


