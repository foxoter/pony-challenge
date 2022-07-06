import { TGameState, TMazeCell, TMazeMoveDirections } from "../typings/ponyApi";

export const getGridCellProps = (cell: TMazeCell, id: number, size: number) => {
  const borderValue = "1px solid grey";
  const props = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as any;
  if (cell.length) {
    cell.forEach((item) => {
      if (item === "north") {
        props.borderTop = borderValue;
      } else {
        props.borderLeft = borderValue;
      }
    });
  }
  if ((id + 1) % size === 0) {
    props.borderRight = borderValue;
  }
  if (id >= size * (size - 1)) {
    props.borderBottom = borderValue;
  }
  return props;
};

export const getCellFilling = (
  cellID: number,
  ponyPos: number,
  domokunPos: number,
  exitPos: number,
) => {
  switch (cellID) {
    case ponyPos:
      return "P";
    case domokunPos:
      return "D";
    case exitPos:
      return "E";
    default:
      return null;
  }
};

export const parseMoveDirection = (
  keyCode: string,
): TMazeMoveDirections | null => {
  switch (keyCode) {
    case "ArrowUp":
      return "north";
    case "ArrowDown":
      return "south";
    case "ArrowLeft":
      return "west";
    case "ArrowRight":
      return "east";
    default:
      return null;
  }
};

export const getIsGameOver = (status: TGameState) => {
  return status === "won" || status === "over";
};
