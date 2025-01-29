import type { FetchResponse } from "@/models/helpers";
import type { BoardEntity, BoardStatus } from ".";
import { UnnormalBoardEntity, UnnormalData } from "@/lib/helpers/normalizeData";

import { _get, _post, _patch, _delete } from "@/lib/helpers/_fetch";

export type UnnormalDataResponse = FetchResponse<UnnormalData>;
export type BoardEntityResponse = FetchResponse<UnnormalBoardEntity>;
export type BoardStatusResponse = FetchResponse<BoardStatus>;

export const boardsEndpoint = "tests";

export const getBoards = async () =>
  await _get(boardsEndpoint, new URLSearchParams({ per: "1000" }));
export const createBoard = async (payload: BoardEntity) =>
  await _post(boardsEndpoint, payload);
export const editBoard = async (payload: BoardEntity) =>
  await _patch(boardsEndpoint, payload);
export const deleteBoard = async (payload: BoardEntity) =>
  await _delete(boardsEndpoint, payload);
