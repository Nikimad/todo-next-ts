"use client";

import type { BoardEntity } from "@/models/features/boards";

import { boardsActions } from "@/models/features/boards";
import EntityEditor from "../EntityEditor";
import getBoard from "@/lib/helpers/getBoard";
import BoardEditor from "./BoardEditor";

const BoardEditorContainer = ({ board }: { board: BoardEntity }) => (
  <EntityEditor<BoardEntity>
    entityName="board"
    entity={board}
    sendAction={boardsActions.updateBoard}
    deleteAction={boardsActions.removeBoard}
    getEntity={getBoard(board.created_at)}
  >
    <BoardEditor board={board} />
  </EntityEditor>
);

export default BoardEditorContainer;
