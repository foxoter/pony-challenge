import React, { useEffect } from "react";
import { Box, Button, Grid, GridItem, Flex, Text } from "@chakra-ui/react";
import { TMazeData, TMazeMoveDirections } from "../typings/ponyApi";
import {
  getCellFilling,
  getGridCellProps,
  getIsGameOver,
  parseMoveDirection,
} from "../utils/maze";
import { Controls } from "./Controls";
import { texts } from "../constants/texts";
import GameModal from "./GameModal";
import Character from "./Character";

type Props = {
  data: TMazeData;
  onMove: (direction: TMazeMoveDirections) => void;
  onReset: () => void;
  movesCount: number;
};

const Maze = ({ data, onMove, onReset, movesCount }: Props) => {
  const {
    size: dimensions,
    data: cells,
    pony,
    domokun,
    "end-point": exit,
    "game-state": status,
  } = data;
  const ponyPos = pony[0];
  const domokunPos = domokun[0];
  const exitPos = exit[0];
  const size = dimensions[0];
  const isGameOver = getIsGameOver(status.state);

  const mazeGridProps = {
    templateRows: `repeat(${size}, 1fr)`,
    templateColumns: `repeat(${size}, 1fr)`,
    mb: 6,
  };

  const cellHeight = size < 20 ? ["6", "8"] : ["4", "6"];

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown, true);

    return () => document.removeEventListener("keydown", onKeyDown, true);
  }, []);

  const onKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();
    const direction = parseMoveDirection(e.key);
    if (direction) {
      onMove(direction);
    }
  };

  return (
    <Box>
      <GameModal
        isOpen={isGameOver}
        onClose={onReset}
        data={status}
        movesCount={movesCount}
      />
      <Flex justifyContent="space-between" alignItems="center" mb={3}>
        <Text>{`${texts.game.moves_counter} ${movesCount}`}</Text>
        <Button onClick={onReset}>{texts.game.button_new_game}</Button>
      </Flex>
      <Grid {...mazeGridProps}>
        {cells.map((cell, idx) => {
          const props = getGridCellProps(cell, idx, size);
          return (
            <GridItem key={idx} {...props} w="100%" h={cellHeight}>
              <Character
                charID={getCellFilling(idx, ponyPos, domokunPos, exitPos)}
              />
            </GridItem>
          );
        })}
      </Grid>
      <Controls onArrowClick={onMove} />
    </Box>
  );
};

export default React.memo(Maze);
