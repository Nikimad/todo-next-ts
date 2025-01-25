import type { FetchResponse } from "@/models/helpers";
import type { TodoEntity, TodoStatus } from ".";

import { _post, _patch, _delete } from "@/lib/helpers/_fetch";
import { tasksEndpoint } from "../tasks/api";

export type TodoEntityResponse = FetchResponse<TodoEntity>;
export type  TodoStatusResponse = FetchResponse<TodoStatus>;

const todosEndpoint = "answers";

export const createTodo = async (payload: TodoEntity) =>
  await _post(`${tasksEndpoint}/${payload.taskId}/${todosEndpoint}`, payload);
export const editTodo = async (payload: TodoEntity) =>
  await _patch(todosEndpoint, payload);
export const deleteTodo = async (payload: TodoEntity) =>
  await _delete(todosEndpoint, payload);
