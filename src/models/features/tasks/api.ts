import type { FetchResponse } from "@/models/helpers";
import type { TaskEntity, TaskStatus } from ".";
import { UnnormalTaskEntity } from "@/lib/helpers/normalizeData";

import { _post, _patch, _delete } from "@/lib/helpers/_fetch";
import { boardsEndpoint } from "../boards/api";

export type TaskEntityResponse = FetchResponse<UnnormalTaskEntity>;
export type TaskStatusResponse = FetchResponse<TaskStatus>;

export const tasksEndpoint = "questions";

export const createTask = async (payload: TaskEntity) =>
  await _post(`${boardsEndpoint}/${payload.boardId}/${tasksEndpoint}`, payload);
export const editTask = async (payload: TaskEntity) =>
  await _patch(tasksEndpoint, payload);
export const deleteTask = async (payload: TaskEntity) =>
  await _delete(tasksEndpoint, payload);
