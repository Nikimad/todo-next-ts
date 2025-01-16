import { TodoEntities } from "../todos";

export type Scope = {
  id: number;
  title: string;
  questions: List[];
};

export type User = {
  id: string | number;
  username: string;
  is_admin: boolean;
};

export enum Lists {
  Todos = "list/todos",
}

export type List = {
  id: number;
  title: Lists.Todos;
  answers: TodoEntities;
};
