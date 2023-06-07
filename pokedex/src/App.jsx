import React, { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import { Router } from "./routes/router";

export const App = () => {
  return (
    <>
      <GlobalStyles />

      <Router />
    </>
  );
};
