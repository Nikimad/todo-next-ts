import { BoardEntity } from "@/models/features/boards";

const getBoard = (created_at: string) => (values: { [key: string]: string }): BoardEntity => ({
  id: values.id,
  title: values.title,
  created_at,
});

export default getBoard;
