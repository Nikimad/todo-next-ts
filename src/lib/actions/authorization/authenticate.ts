import { Endpoints } from "../../endpoints";
import { UserDataResult } from "./types";

import { _get } from "../../helpers/_fetch";

const authenticate = async (): Promise<UserDataResult> => {
  const [errors, data] = await _get(Endpoints.authenticate);

  if (data) {
    return [
      null,
      {
        id: data.id,
        username: data.username,
        is_admin: data.is_admin,
      },
    ];
  }

  return [errors];
};

export default authenticate;
