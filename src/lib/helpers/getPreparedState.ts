import { User } from "@/models/features/authorization";
import { BoardEntity, TodoEntity, TaskEntity } from "@/models/types/entities";
import { Errors } from "../types";
import { UnnormalData } from "../normolizer/types"; 
import { getUser } from "@/models/features/authorization/api";
import { getBoards } from "@/models/features/boards/api";
import normalizeData from "../normolizer/normalizeData"

export type PreparedState = {
  user?: User;
  boards?: BoardEntity[];
  tasks?: TaskEntity[];
  todos?: TodoEntity[];
  errors?: Errors;
};

const getPreparedState = async (): Promise<PreparedState> => {
  const [authErrors, user] = await getUser();

  if (authErrors) return { errors: authErrors };

  if (user) {
    const [dataErrors, data] = await getBoards();

    if (dataErrors) return { errors: dataErrors };

    if (data) {
      const normalizedData = normalizeData(data as UnnormalData);

      return {
        user,
        ...normalizedData,
      };
    }
  }

  return { errors: null };
};

export default getPreparedState;
