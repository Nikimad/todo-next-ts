import type { FetchResponse } from "@/models/helpers";
import type { BoardEntity, BoardStatus } from ".";
import { UnnormalBoardEntity } from "@/lib/helpers/normalizeData";

import { _get, _post, _patch, _delete } from "@/lib/helpers/_fetch";

export type BoardEntityResponse = FetchResponse<UnnormalBoardEntity>;
export type BoardStatusResponse = FetchResponse<BoardStatus>;

export const boardsEndpoint = "tests";

export const getBoards = async () => await _get(boardsEndpoint);
export const createBoard = async (payload: BoardEntity) =>
  await _post(boardsEndpoint, payload);
export const editBoard = async (payload: BoardEntity) =>
  await _patch(boardsEndpoint, payload);
export const deleteBoard = async (payload: BoardEntity) =>
  await _delete(boardsEndpoint, payload);
