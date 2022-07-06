import { TMazeMoveDirections } from "../typings/ponyApi";

export const getCreateMazeBody = (size: number, difficulty: number) => {
  return {
    "maze-width": size,
    "maze-height": size,
    "maze-player-name": "Applejack",
    difficulty: difficulty,
  };
};

export const getMazeIDUrl = (url: string, id: string) => {
  return `${url}/${id}`;
};

export const getMoveBody = (direction: TMazeMoveDirections) => {
  return {
    direction: direction,
  };
};
