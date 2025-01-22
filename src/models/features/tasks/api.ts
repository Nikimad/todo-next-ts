import type { FetchResponse } from "@/models/helpers";
import type { TaskEntity, TaskStatus } from ".";

import { _post, _patch, _delete } from "@/lib/helpers/_fetch";

enum Endpoints {
  Create,
  Edit,
  Delete,
}

export type TaskEntityResponse = FetchResponse<TaskEntity>;
export type TaskStatusResponse = FetchResponse<TaskStatus>;

const getEndpoint = (name: Endpoints, id: string | number): string => {
  const endpointsList: Record<Endpoints, string> = {
    [Endpoints.Create]: `/tests/${id}/questions`,
    [Endpoints.Edit]: `/questions/${id}`,
    [Endpoints.Delete]: `/questions/${id}`,
  };

  return endpointsList[name];
};

export const createTask = async (payload: TaskEntity) =>
  await _post(getEndpoint(Endpoints.Create, payload.boardId), payload);
export const editTask = async (payload: TaskEntity) =>
  await _patch(getEndpoint(Endpoints.Edit, payload.id), payload);
export const deleteTask = async (payload: TaskEntity) =>
  await _delete(getEndpoint(Endpoints.Delete, payload.id), payload);
