import React from "react";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { Game } from "./Game";
import { texts } from "../constants/texts";

export const Main = () => {
  return (
    <Stack
      as="section"
      spacing={5}
      p={6}
      bg="white"
      mt={6}
      mb={6}
      borderRadius={8}
    >
      <Heading as="h1" textAlign="center" size="2xl">
        {texts.main.title}
      </Heading>
      <Text textAlign="center" as="i">
        {texts.main.subtitle}
      </Text>
      <Game />
    </Stack>
  );
};
