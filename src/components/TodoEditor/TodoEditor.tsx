import { TodoEntity } from "@/models/features/todos";

import EntityLink from "../EntityLink";
import Choice from "../Choice";
import s from "./TodoEditor.module.css"

const TodoEditor = ({
  todo,
  onComplete,
}: {
  todo: TodoEntity;
  onComplete: () => void;
}) => (
  <div className={s.editor}>
    <Choice
      name="is_right"
      checked={todo.is_right}
      onChange={onComplete}
    >
      Complete
    </Choice>
    <EntityLink>{todo.text}</EntityLink>
  </div>
);

export default TodoEditor;
