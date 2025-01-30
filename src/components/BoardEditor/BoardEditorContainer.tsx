"use client";

import type { BoardEntity } from "@/models/types/entities";

import { boardsActions } from "@/models/features/boards";
import EntityEditor from "../EntityEditor";
import getBoard from "@/lib/normolizer/getBoard";
import BoardEditor from "./BoardEditor";

const BoardEditorContainer = ({ board }: { board: BoardEntity }) => (
  <EntityEditor<BoardEntity>
    entityName="board"
    entity={board}
    sendAction={boardsActions.updateBoard}
    deleteAction={boardsActions.removeBoard}
    getEntity={getBoard({})}
  >
    <BoardEditor board={board} />
  </EntityEditor>
);

export default BoardEditorContainer;
