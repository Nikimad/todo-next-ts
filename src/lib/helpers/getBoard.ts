import { BoardEntity } from "@/models/features/boards";

const getBoard = (values: { [key: string]: string }): BoardEntity => ({
  id: values.id,
  title: values.title,
});

export default getBoard;
