"use client";

import type { BoardEntity } from "@/models/features/boards";

import { boardsActions } from "@/models/features/boards";
import getBoard from "@/lib/normolizer/getBoard";
import EntityCreator from "../EntityCreator";

const BoardCreatorContainer = () => {
  const boardDraft: BoardEntity = {
    id: "boardDraftId",
    title: "",
    created_at: "",
  };

  return (
    <EntityCreator<BoardEntity>
      entityName="board"
      entity={boardDraft}
      sendAction={boardsActions.addBoard}
      getEntity={getBoard({})}
    />
  );
};

export default BoardCreatorContainer;
