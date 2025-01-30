import {
  UnnormalEntity,
  UnnormalBoardEntity,
  BoardEntity,
  TaskEntity,
  TodoEntity,
} from "@/models/types/entities";

export type EntityValues = { [key: string]: string };

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
