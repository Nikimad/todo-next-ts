import type { TodoEntity } from "@/models/types/entities";

import EntitiesList from "../EntitiesList";
import TodoEditor from "../TodoEditor";

interface TodosProps {
  todos: TodoEntity[];
}

const Todos = ({ todos }: TodosProps) => (
  <EntitiesList<TodoEntity>
    name="todo"
    isEmpty={todos.length === 0}
  >
    {todos.map((todo) => (
      <TodoEditor key={todo.id} todo={todo} />
    ))}
  </EntitiesList>
);

export default Todos;
