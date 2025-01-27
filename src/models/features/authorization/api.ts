"use server";

import type { FetchResponse } from "@/models/helpers";
import type { User, Status, AuthorizationData } from ".";
import { _get, _post, _patch, _delete } from "@/lib/helpers/_fetch";
import { sessionAdapter } from "@/lib/helpers/sessionAdapter";

export type UserResponse = FetchResponse<User>;
export type StatusResponse = FetchResponse<Status>;


export const getUser = async () => await _get("users/current") as UserResponse;
export const sign = async (payload: AuthorizationData) => {
  const [errors, data, setCookies] = await _post(
    "password_confirmation" in payload ? "signup" : "signin",
    payload
  );

  await sessionAdapter.setSession(setCookies);

  return [errors, data];
}
export const logout = async () => {
  await sessionAdapter.deleteSession();
  return await _delete("logout");
};
