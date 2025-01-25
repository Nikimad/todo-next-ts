import { BoardEntity } from "@/models/features/boards";

import EntitiesList from "../EntitiesList";
import BoardEditor from "../BoardEditor";

interface BoardsProps {
  boards: BoardEntity[];
}

const Boards = ({ boards }: BoardsProps) => (
  <EntitiesList<BoardEntity> name="board" isQuery={false} isEmpty={boards.length === 0}>
    {boards.map((board) => <BoardEditor key={board.id} board={board} />)}
  </EntitiesList>
);

export default Boards;
