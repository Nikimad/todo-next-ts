import { Concrete, Errors } from "@/lib/types";

export type TodoEntity = {
  id: string | number;
  text: string;
  is_right: boolean;
};

export type TodoStatus = { status: string };

export enum TodoActionsTypes {
  Edit = "todo/edit",
  Reset = "todo/reset",
  Delete = "todo/delete",
}

export type TodoState = {
  errors: Errors;
  todo: TodoEntity | TodoStatus;
};

export type TodoAction = { type: TodoActionsTypes; payload: TodoState };

export type TodoReducer = (
  payload: TodoAction["payload"]
) => Promise<TodoState> | TodoState;

export type TodoReducers = Record<TodoActionsTypes, TodoReducer>;

export interface TodoRootProps {
  todo: TodoEntity;
  isLoading?: boolean;
  errors?: Errors;
}

export type TodoStateProps = Concrete<TodoRootProps>;
