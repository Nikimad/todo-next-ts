import { Endpoints } from "@/lib/endpoints";
import {
  TodoEntity,
  TodoStatus,
  TodoState,
  TodoActionsTypes,
  TodoAction,
  TodoReducer,
  TodoReducers,
} from "./types";
import { errors } from "@/lib/errors";
import { _patch, _delete } from "@/lib/helpers/_fetch";

const editTodo: TodoReducer = async (payload) => {
  if (payload.errors) return payload;
  const [errors, todo] = await _patch(Endpoints.Todos, payload.todo);
  return {
    errors,
    todo: todo as TodoEntity,
  };
};

const resetTodo: TodoReducer = (payload) => ({
  errors: null,
  todo: payload.todo,
});

const deleteTodo: TodoReducer = async (payload) => {
  const [errors, status] = await _delete(Endpoints.Todos, payload.todo);
  return {
    errors,
    todo: status as TodoStatus,
  };
};

export const todoReducer = async (prevState: TodoState, action: TodoAction) => {
  const todoReducers: TodoReducers = {
    [TodoActionsTypes.Edit]: editTodo,
    [TodoActionsTypes.Reset]: resetTodo,
    [TodoActionsTypes.Delete]: deleteTodo,
  };
  try {
    return await todoReducers[action.type](action.payload);
  } catch {
    return { ...prevState, errors: errors["500"] };
  }
};
