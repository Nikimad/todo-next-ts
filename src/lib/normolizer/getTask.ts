import { UnnormalTaskEntity } from "@/models/types/entities";
import { UnnormalEntityParam } from "./types";
import { AdditionalTaskProps } from "./normalizeTask";
import normalizeTask from "./normalizeTask";

const getTask =
  (additional: AdditionalTaskProps) =>
  (task: UnnormalEntityParam<UnnormalTaskEntity>) =>
    normalizeTask(task, additional);

export default getTask;
