import type { FetchResponse } from "@/models/helpers";
import {
  EntityDeleteStatus,
  UnnormalTaskEntity,
  TaskEntity,
} from "@/models/types/entities";

import { _post, _patch, _delete } from "@/lib/helpers/_fetch";
import { boardsEndpoint } from "../boards/api";

export type TaskEntityResponse = FetchResponse<UnnormalTaskEntity>;
export type TaskStatusResponse = FetchResponse<EntityDeleteStatus>;

export const tasksEndpoint = "questions";

export const createTask = async (payload: TaskEntity) =>
  await _post(`${boardsEndpoint}/${payload.boardId}/${tasksEndpoint}`, payload);
export const editTask = async (payload: TaskEntity) =>
  await _patch(tasksEndpoint, payload);
export const deleteTask = async (payload: TaskEntity) =>
  await _delete(tasksEndpoint, payload);
