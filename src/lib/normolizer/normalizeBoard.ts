import { UnnormalBoardEntity, BoardEntity } from "@/models/types/entities";
import { UnnormalEntityParam  } from "./types";

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
