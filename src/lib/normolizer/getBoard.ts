import { UnnormalEntityParam, UnnormalBoardEntity } from "./types";
import { AdditionalBoardProps } from "./normalizeBoard";
import normalizeBoard from "./normalizeBoard";

const getBoard =
  (additional: AdditionalBoardProps) =>
  (board: UnnormalEntityParam<UnnormalBoardEntity>) =>
    normalizeBoard(board, additional);

export default getBoard;
