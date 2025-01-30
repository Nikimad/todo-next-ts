import { BoardEntity } from "@/models/types/entities";
import EntityLink from "../EntityLink";

const BoardEditor = ({ board }: { board: BoardEntity }) => (
  <EntityLink href={`/${board.id}`}>{board.title}</EntityLink>
);

export default BoardEditor;