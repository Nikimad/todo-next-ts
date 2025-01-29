import { UnnormalEntityParam, UnnormalTaskEntity } from "./types";
import { AdditionalTaskProps } from "./normalizeTask";
import normalizeTask from "./normalizeTask";

const getTask =
  (additional: AdditionalTaskProps) =>
  (task: UnnormalEntityParam<UnnormalTaskEntity>) =>
    normalizeTask(task, additional);

export default getTask;
