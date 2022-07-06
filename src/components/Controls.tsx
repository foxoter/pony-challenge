import React from "react";
import { Button, Grid, GridItem } from "@chakra-ui/react";
import {
  ChevronLeftIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { TMazeMoveDirections } from "../typings/ponyApi";

type Props = {
  onArrowClick: (direction: TMazeMoveDirections) => void;
};

export const Controls = ({ onArrowClick }: Props) => {
  const containerProps = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid grey",
    borderRadius: "8px",
  };

  const iconProps = {
    w: 5,
    h: 5,
  };

  return (
    <Grid
      gap={3}
      h="75px"
      templateColumns={"repeat(3, 1fr)"}
      templateRows={"repeat(2, 1fr)"}
      templateAreas={`
          "arrowLeft arrowUp arrowRight"
          "arrowLeft arrowDown arrowRight"
        `}
    >
      <GridItem {...containerProps} area={"arrowLeft"}>
        <Button w="100%" h="100%" onClick={() => onArrowClick("west")}>
          <ChevronLeftIcon {...iconProps} />
        </Button>
      </GridItem>
      <GridItem {...containerProps} area={"arrowUp"}>
        <Button w="100%" h="100%" onClick={() => onArrowClick("north")}>
          <ChevronUpIcon {...iconProps} />
        </Button>
      </GridItem>
      <GridItem {...containerProps} area={"arrowDown"}>
        <Button w="100%" h="100%" onClick={() => onArrowClick("south")}>
          <ChevronDownIcon {...iconProps} />
        </Button>
      </GridItem>
      <GridItem {...containerProps} area={"arrowRight"}>
        <Button w="100%" h="100%" onClick={() => onArrowClick("east")}>
          <ChevronRightIcon {...iconProps} />
        </Button>
      </GridItem>
    </Grid>
  );
};
