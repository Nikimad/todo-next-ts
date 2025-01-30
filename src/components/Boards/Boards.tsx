import { BoardEntity } from "@/models/types/entities";

import EntitiesList from "../EntitiesList";
import BoardEditor from "../BoardEditor";

interface BoardsProps {
  boards: BoardEntity[];
}

const Boards = ({ boards }: BoardsProps) => (
  <EntitiesList<BoardEntity>
    name="board"
    isEmpty={boards.length === 0}
  >
    {boards.map((board) => (
      <BoardEditor key={board.id} board={board} />
    ))}
  </EntitiesList>
);

export default Boards;
