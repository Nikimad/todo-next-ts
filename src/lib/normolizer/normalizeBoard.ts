import { UnnormalEntityParam, UnnormalBoardEntity } from "./types";
import { BoardEntity } from "@/models/features/boards";

export type AdditionalBoardProps = {
  created_at?: string;
};

const normalizeBoard = (
  board: UnnormalEntityParam<UnnormalBoardEntity>,
  additional: AdditionalBoardProps
) => {
  const normalizedBoard: BoardEntity = {
    ...additional,
    id: board.id,
    title: String(board.title),
    created_at: String(board.created_at),
  };

  return normalizedBoard;
};

export default normalizeBoard;
