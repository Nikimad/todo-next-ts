import { BoardEntity } from "@/models/features/boards";
import { TaskEntity } from "@/models/features/tasks";
import { TodoEntity } from "@/models/features/todos";

type UnnormalTodoEntity = Omit<TodoEntity, "taskId">;
interface UnnormalTaskEntity extends Omit<TaskEntity, "boardId"> {
  answers: UnnormalTodoEntity[];
}
interface UnnormalBoardEntity extends BoardEntity {
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
            ...todo,
            taskId: task.id,
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
