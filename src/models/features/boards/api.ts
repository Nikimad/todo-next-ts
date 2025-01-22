import type { FetchResponse } from "@/models/helpers";
import type { BoardEntity, BoardStatus } from ".";

import { _post, _patch, _delete } from "@/lib/helpers/_fetch";

enum Endpoints {
  Create,
  Edit,
  Delete,
}

export type BoardEntityResponse = FetchResponse<BoardEntity>;
export type  BoardStatusResponse = FetchResponse<BoardStatus>;

const getEndpoint = (name: Endpoints, id?: string | number): string => {
  const endpointsList: Record<Endpoints, string> = {
    [Endpoints.Create]: `/tests`,
    [Endpoints.Edit]: `/tests/${id}`,
    [Endpoints.Delete]: `/tests/${id}`,
  };

  return endpointsList[name];
};

export const createBoard = async (payload: BoardEntity) =>
  await _post(getEndpoint(Endpoints.Create), payload);
export const editBoard = async (payload: BoardEntity) =>
  await _patch(getEndpoint(Endpoints.Edit, payload.id), payload);
export const deleteBoard = async (payload: BoardEntity) =>
  await _delete(getEndpoint(Endpoints.Delete, payload.id), payload);
