import { TodoEntity } from "../todo";
import {
  TodosState,
  TodosAction,
  TodosActionsTypes,
  TodosReducer,
  TodosReducers,
} from "./types";
import { errors } from "@/lib/errors";
import { _post } from "@/lib/helpers/_fetch";

const addTodo: TodosReducer = async (todos, payload) => {
  if (payload.errors) return { todos, errors: payload.errors };
  if (payload.scopeKey) {
    const [errors, todo] = await _post(payload.scopeKey, payload.todo);
    return {
      errors,
      todos: !todo ? todos : [...todos, todo as TodoEntity],
    };
  }
  return { todos, errors: null };
};

const removeTodo: TodosReducer = (todos, payload) => ({
  errors: null,
  todos: todos.filter(({ id }) => id !== payload.todo.id),
});

export const todosReducer = async (
  prevState: TodosState,
  action: TodosAction
) => {
  const todosReducers: TodosReducers = {
    [TodosActionsTypes.Add]: addTodo,
    [TodosActionsTypes.Remove]: removeTodo,
  };
  try {
    return await todosReducers[action.type](prevState.todos, action.payload);
  } catch {
    return { ...prevState, errors: errors["500"] };
  }
};
