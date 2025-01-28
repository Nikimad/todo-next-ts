import { BoardEntity } from "@/models/features/boards";
import { TaskEntity } from "@/models/features/tasks";
import { TodoEntity } from "@/models/features/todos";

export type UnnormalTodoEntity = Omit<TodoEntity, "boardId" | "taskId">;
export interface UnnormalTaskEntity extends Omit<TaskEntity, "boardId"> {
  answers: UnnormalTodoEntity[];
}
export interface UnnormalBoardEntity extends BoardEntity {
  questions: UnnormalTaskEntity[];
}
export type UnnormalData = {
  tests: UnnormalBoardEntity[];
};
type NormalizedData = {
  boards: BoardEntity[];
  tasks: TaskEntity[];
  todos: TodoEntity[];
};
type NormalizedDataSlice = Omit<NormalizedData, "boards">;

const normalizeData = (data: UnnormalData) => {
  const normalizedData = data.tests.reduce(
    (acc: NormalizedData, { questions: tasks, ...board }) => {
      const normalizedDataSlice = tasks.reduce(
        (innerAcc: NormalizedDataSlice, { answers: todos, ...task }) => {
          const normolizedTask = { ...task, boardId: board.id };
          const normolizedTodos = todos.map((todo) => ({
            boardId: board.id,
            taskId: task.id,
            ...todo,
          }));

          innerAcc.tasks = [...innerAcc.tasks, normolizedTask];
          innerAcc.todos = [...innerAcc.todos, ...normolizedTodos];

          return innerAcc;
        },
        { tasks: [], todos: [] }
      );

      acc.boards = [...acc.boards, board];
      acc.tasks = [...acc.tasks, ...normalizedDataSlice.tasks];
      acc.todos = [...acc.todos, ...normalizedDataSlice.todos];

      return acc;
    },
    { boards: [], tasks: [], todos: [] }
  );

  return normalizedData;
};

export default normalizeData;
