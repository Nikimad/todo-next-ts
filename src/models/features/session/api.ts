import type { FetchResponse } from "@/models/helpers";
import type { User, Status, Sign } from ".";

import { _get, _post, _patch, _delete } from "@/lib/helpers/_fetch";

export type UserResponse = FetchResponse<User>;
export type StatusResponse = FetchResponse<Status>;

export const sign = async (payload: Sign) =>
  await _post("password_confirmation" in payload ? "signup" : "signin", payload);
export const logout = async () => await _delete("logout");
