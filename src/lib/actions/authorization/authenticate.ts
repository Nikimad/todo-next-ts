import type { Payload } from "@/lib/types";
import type { Scope, User } from "./types";
import { Endpoints } from "../../endpoints";

import { _get } from "../../helpers/_fetch";
import getUserScope from "@/lib/_mocks";

export const authenticate = async (): Promise<Payload<Scope>> => {
  const [errors, user] = (await _get(Endpoints.Authenticate)) as Payload<User>;

  if (user) {
    const [errors, scope] = await getUserScope(user);
    return [errors, scope];
  }

  return [errors];
};
