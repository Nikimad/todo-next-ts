"use client";

import type { BoardEntity } from "@/models/features/boards";

import { boardsActions } from "@/models/features/boards";
import getBoard from "@/lib/helpers/getBoard";
import EntityCreator from "../EntityCreator";

const BoardCreatorContainer = () => (
  <EntityCreator<BoardEntity>
    entityName="board"
    entity={{
      id: crypto.randomUUID(),
      title: "",
      created_at: "uncreated",
    }}
    action={boardsActions.addBoard}
    getEntity={getBoard}
  />
);

export default BoardCreatorContainer;
