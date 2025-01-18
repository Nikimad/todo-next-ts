import type { FetchResponse } from "@/models/helpers";
import type { TodoEntity, TodoStatus } from ".";

import { _post, _patch, _delete } from "@/lib/helpers/_fetch";

enum Endpoints {
  Create,
  Edit,
  Delete,
}

export type TodoEntityResponse = FetchResponse<TodoEntity>;
export type  TodoStatusResponse = FetchResponse<TodoStatus>;

const getEndpoint = (name: Endpoints, id: string | number): string => {
  const endpointsList: Record<Endpoints, string> = {
    [Endpoints.Create]: `/questions/${id}/answers`,
    [Endpoints.Edit]: `/answers/${id}`,
    [Endpoints.Delete]: `/answers/${id}`,
  };

  return endpointsList[name];
};

export const createTodo = async (payload: TodoEntity) =>
  await _post(getEndpoint(Endpoints.Create, payload.taskId), payload);
export const editTodo = async (payload: TodoEntity) =>
  await _patch(getEndpoint(Endpoints.Edit, payload.id), payload);
export const deleteTodo = async (payload: TodoEntity) =>
  await _delete(getEndpoint(Endpoints.Delete, payload.id), payload);
