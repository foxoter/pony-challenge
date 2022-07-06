import React from "react";
import { Container } from "@chakra-ui/react";
import { Main } from "./components/Main";
import { NavBar } from "./components/NavBar";

export const App = () => (
  <>
    <NavBar />
    <Container maxW="container.sm" p={0} as="main">
      <Main />
    </Container>
  </>
);
