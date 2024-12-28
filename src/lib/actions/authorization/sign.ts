"use server";

import { cookies as nextCookies } from "next/headers";
import { Endpoints } from "../../endpoints";
import { InputData, UserDataResult } from "./types";
import { _post } from "../../helpers/_fetch";
import handleFormData from "../../helpers/handleFormData";
import getCookie from "../../helpers/getCookies";

const sign = async (
  _: UserDataResult,
  formData: FormData
): Promise<UserDataResult> => {
  const inputData: InputData = handleFormData(formData);

  const [errors, data, cookies] = await _post(
    inputData.password_confirmation ? Endpoints.signup : Endpoints.signin,
    inputData
  );

  if (data && cookies) {
    const sessionKey = "_session_id";
    const cookiesStore = await nextCookies();
    const session = getCookie(cookies, sessionKey);
    session && cookiesStore.set(sessionKey, session);

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

export default sign;
