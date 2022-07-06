import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { texts } from "../constants/texts";

export const NavBar = () => (
  <Flex
    as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    padding="4"
    bg="gray.800"
    color="white"
  >
    <Text
      fontFamily="mono"
      letterSpacing="2px"
      fontWeight="bold"
      fontSize="lg"
      textTransform={"uppercase"}
    >
      {texts.meta.title}
    </Text>
  </Flex>
);
