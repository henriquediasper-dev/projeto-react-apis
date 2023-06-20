import React, { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import { Router } from "./routes/router";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import GlobalContextProvider from "./context/globalContext";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgColor: "#5E5E5E",
      },
    },
  },
});

export const App = () => {
  return (
    <GlobalContextProvider>
      <ChakraProvider theme={theme}>
        {/* Estilos globais da aplicação */}
        <GlobalStyles />

        {/* Componente de roteamento da aplicação */}
        <Router />
      </ChakraProvider>
    </GlobalContextProvider>
  );
};
