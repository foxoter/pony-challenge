import axios from "axios";
import { ponyApiEndpoints } from "../constants/ponyApi";
import { TMazeMoveDirections } from "../typings/ponyApi";
import { getCreateMazeBody, getMazeIDUrl, getMoveBody } from "../utils/ponyApi";

const ponyApi = axios.create({
  baseURL: process.env.REACT_APP_PONY_API_URL,
});

export const createMaze = async (size: number, difficulty: number) => {
  const body = getCreateMazeBody(size, difficulty);
  return await ponyApi.post(ponyApiEndpoints.createMaze, body);
};

export const getMaze = async (id: string) => {
  const url = getMazeIDUrl(ponyApiEndpoints.getMaze, id);
  return await ponyApi.get(url);
};

export const makeMove = async (id: string, direction: TMazeMoveDirections) => {
  const url = getMazeIDUrl(ponyApiEndpoints.makeMove, id);
  const body = getMoveBody(direction);
  return await ponyApi.post(url, body);
};
