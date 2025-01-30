import type { FetchResponse } from "@/models/helpers";
import type {
  EntityDeleteStatus,
  UnnormalTodoEntity,
  TodoEntity,
} from "@/models/types/entities";
import { _post, _patch, _delete } from "@/lib/helpers/_fetch";
import { tasksEndpoint } from "../tasks/api";

export type TodoEntityResponse = FetchResponse<UnnormalTodoEntity>;
export type TodoStatusResponse = FetchResponse<EntityDeleteStatus>;

const todosEndpoint = "answers";

export const createTodo = async (payload: TodoEntity) =>
  await _post(`${tasksEndpoint}/${payload.taskId}/${todosEndpoint}`, payload);
export const editTodo = async (payload: TodoEntity) =>
  await _patch(todosEndpoint, payload);
export const deleteTodo = async (payload: TodoEntity) =>
  await _delete(todosEndpoint, payload);
