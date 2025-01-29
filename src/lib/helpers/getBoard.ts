import { EntityValues } from "@/models";
import { UnnormalBoardEntity } from "./normalizeData";
import { BoardEntity } from "@/models/features/boards";

const getBoard =
  (created_at?: string) =>
  (values: EntityValues | UnnormalBoardEntity): BoardEntity => ({
    id: values.id,
    title: values.title,
    created_at: created_at || values.created_at,
  });

export default getBoard;
