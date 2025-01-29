import { UnnormalData, NormalizedData } from "./types";
import normalizeBoard from "./normalizeBoard";
import normalizeTask from "./normalizeTask";
import normalizeTodo from "./normalizeTodo";

const normalizeData = (data: UnnormalData) =>
  data.tests.reduce(
    (acc: NormalizedData, { questions: tasks, ...board }) => {
      const normalizedBoard = normalizeBoard(board, {});

      const normalizedDataSlice = tasks.reduce(
        (
          innerAcc: Omit<NormalizedData, "boards">,
          { answers: todos, ...task }
        ) => {
          const normalizedTask = normalizeTask(task, { boardId: board.id });

          const normalizedTodos = todos.map((todo) =>
            normalizeTodo(todo, { boardId: board.id, taskId: task.id })
          );

          innerAcc.tasks = [...innerAcc.tasks, normalizedTask];
          innerAcc.todos = [...innerAcc.todos, ...normalizedTodos];

          return innerAcc;
        },
        { tasks: [], todos: [] }
      );

      acc.boards = [...acc.boards, normalizedBoard];
      acc.tasks = [...acc.tasks, ...normalizedDataSlice.tasks];
      acc.todos = [...acc.todos, ...normalizedDataSlice.todos];

      return acc;
    },
    { boards: [], tasks: [], todos: [] }
  );

export default normalizeData;
