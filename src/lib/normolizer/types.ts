import { BoardEntity } from "@/models/features/boards";
import { TaskEntity } from "@/models/features/tasks";
import { TodoEntity } from "@/models/features/todos";

export type EntityValues = { [key: string]: string };

export type UnnormalTodoEntity = Omit<TodoEntity, "boardId" | "taskId">;

export interface UnnormalTaskEntity extends Omit<TaskEntity, "boardId"> {
  answers: UnnormalTodoEntity[];
}
export interface UnnormalBoardEntity extends BoardEntity {
  questions: UnnormalTaskEntity[];
}

type UnnormalEntity =
  | UnnormalBoardEntity
  | UnnormalTaskEntity
  | UnnormalTodoEntity;
export type UnnormalEntityParam<UnnormalEntityType extends UnnormalEntity> =
  | { [key: string]: string | number }
  | UnnormalEntityType;

export type UnnormalData = {
  tests: UnnormalBoardEntity[];
};

export type NormalizedData = {
  boards: BoardEntity[];
  tasks: TaskEntity[];
  todos: TodoEntity[];
};
