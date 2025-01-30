import { IfEquals } from "../helpers";

export type Entities = {
  board: BoardEntity;
  task: TaskEntity;
  todo: TodoEntity;
};

export type BoardEntity = {
  id: string | number;
  title: string;
  created_at: string;
};

export interface UnnormalBoardEntity extends BoardEntity {
  questions: UnnormalTaskEntity[];
}

export type TaskEntity = {
  id: string | number;
  boardId: BoardEntity["id"];
  title: string;
  question_type: "multiple";
};

export interface UnnormalTaskEntity extends Omit<TaskEntity, "boardId"> {
  answers: UnnormalTodoEntity[];
}

export type TodoEntity = {
  boardId: BoardEntity["id"];
  taskId: TaskEntity["id"];
  id: string | number;
  text: string;
  is_right: boolean;
};

export type UnnormalTodoEntity = Omit<TodoEntity, "boardId" | "taskId">;

export type Entity = BoardEntity | TaskEntity | TodoEntity;

export type UnnormalEntity =
  | UnnormalBoardEntity
  | UnnormalTaskEntity
  | UnnormalTodoEntity;

export type EntityDeleteStatus = {
  status: string;
};

export type EntityName<EntityType extends Entity> = keyof {
  [Name in keyof Entities as IfEquals<
    Entities[Name],
    EntityType,
    Name
  >]: Entities[Name];
};
