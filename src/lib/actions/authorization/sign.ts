"use server";

import type { Payload } from "@/lib/types";
import { Scope, User } from "./types";
import { Endpoints } from "../../endpoints";

import { cookies as nextCookies } from "next/headers";
import { _post } from "../../helpers/_fetch";
import serializeFormData from "../../helpers/serializeFormData";
import getCookie from "../../helpers/getCookies";
import getUserScope from "@/lib/_mocks";

export const sign = async (
  _: Payload<Scope>,
  formData: FormData
): Promise<Payload<Scope>> => {
  const inputData = serializeFormData(formData);
  const isSignup = "password_confirmation" in inputData;

  const payload = {
    ...inputData,
    username: inputData.username.toLocaleLowerCase(),// ?search=Username -> 500;
    is_admin: true,
  }
  
  const [errors, user, setCookies] = (await _post(
    isSignup ? Endpoints.Signup : Endpoints.Signin,
    payload
  )) as Payload<User>;

  if (user && setCookies) {
    const sessionKey = "_session_id";
    const cookiesStore = await nextCookies();
    const session = getCookie(setCookies, sessionKey);
    if (session) cookiesStore.set(sessionKey, session);

    const [errors, scope] = await getUserScope(
      user,
      isSignup
    );

    return [
      errors,
      scope,
    ];
  }

  return [errors];
};
