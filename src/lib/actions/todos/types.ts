import { Errors } from "@/lib/types";
import type { TodoEntity } from "../todo";

export type TodoEntities = TodoEntity[];

export enum TodosActionsTypes {
  Add = "todos/add",
  Remove = "todos/remove",
}

export type TodosState = {
  errors: Errors;
  todos: TodoEntities;
};

export type TodosAction = {
  type: TodosActionsTypes;
  payload: {
    errors: Errors;
    todo: TodoEntity;
    scopeKey?: string;
  };
};

export type TodosReducer = (
  prevTodos: TodoEntities,
  payload: TodosAction["payload"]
) => Promise<TodosState> | TodosState;

export type TodosReducers = Record<TodosActionsTypes, TodosReducer>;
