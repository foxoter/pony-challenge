export type TMazeMoveDirections = "north" | "south" | "east" | "west";

export type TMazeCell = [] | ["west", "north" | "west" | "north"];

export type TGameState = "won" | "Active" | "active" | "over";

export type TGameStateObject = {
  state: TGameState;
  "state-result": string;
}

export type TMazeData = {
  data: TMazeCell[];
  difficulty: number;
  "end-point": number[];
  pony: number[];
  domokun: number[];
  size: number[];
  "game-state": TGameStateObject;
};
