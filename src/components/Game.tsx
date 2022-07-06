import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import GameStart from "./GameStart";
import Maze from "./Maze";
import { createMaze, getMaze, makeMove } from "../api/pony";
import { TMazeMoveDirections } from "../typings/ponyApi";
import { MAZE_MIN_DIFFICULTY, MAZE_MIN_SIZE } from "../constants/game";

export const Game = () => {
  const [movesCount, setMovesCount] = useState(0);
  const [mazeSize, setMazeSize] = useState(MAZE_MIN_SIZE);
  const [mazeDifficulty, setMazeDifficulty] = useState(MAZE_MIN_DIFFICULTY);
  const [mazeID, setMazeID] = useState(null);
  const [mazeData, setMazeData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const resetGame = () => {
    setMazeData(null);
    setMazeID(null);
    setMovesCount(0);
  };

  const onStarClick = () => {
    setIsLoading(true);
    createMaze(mazeSize, mazeDifficulty)
      .then((res) => {
        setMazeID(res.data.maze_id);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const onMove = (direction: TMazeMoveDirections) => {
    if (mazeID) {
      makeMove(mazeID, direction)
        .then(() => {
          setMovesCount((movesCount) => movesCount + 1);
          getMaze(mazeID)
            .then((res) => {
              setMazeData(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    if (mazeID) {
      getMaze(mazeID)
        .then((res) => {
          setMazeData(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  }, [mazeID]);

  return (
    <Box>
      {!mazeData && (
        <GameStart
          mazeSizeValue={mazeSize}
          mazeDifficultyValue={mazeDifficulty}
          onMazeSizeChange={setMazeSize}
          onMazeDifficultyChange={setMazeDifficulty}
          onStartClick={onStarClick}
          isLoading={isLoading}
        />
      )}
      {mazeData && (
        <Maze
          data={mazeData}
          onMove={onMove}
          movesCount={movesCount}
          onReset={resetGame}
        />
      )}
    </Box>
  );
};
