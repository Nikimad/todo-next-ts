"use server";

import qs from "querystring";
import { cookies } from "next/headers";
import { Endpoints } from "../endpoints";

const url = "";
const scopeKey = "mock-todo-nextjs-ts";

enum Methods {
  get = "GET",
  post = "POST",
  patch = "PATCH",
  delete = "DELETE",
}

const _fetch = async (
  method: Methods,
  endpoint: Endpoints,
  headers?: object,
  body?: object
): Promise<[object | null, object?]> => {
  const response = await fetch(`${url}/${endpoint}`, {
    method,
    credentials: "include",
    ...(body && {
      body: JSON.stringify(body),
    }),
    headers: {
      "Content-Type": "application/json",
      "Scope-Key": scopeKey,
      ...headers,
    },
  });

  try {
    const parsedRes = await response.json();

    if (response.ok) {
      const cookiesStore = await cookies();
      response.headers.getSetCookie().forEach((cookieString) => {
        const cookiesMap = qs.decode(cookieString);
        for (const name in cookiesMap) {
          if (typeof cookiesMap[name] === "string") {
            cookiesStore.set(name, cookiesMap[name]);
          }
        }
      });
    }

    return response.ok ? [null, parsedRes] : [parsedRes];
  } catch {
    return [{ error: "Something went wrong" }];
  }
};

export const _get = async (endpoint: Endpoints, headers?: object) =>
  await _fetch(Methods.get, endpoint, headers);
export const _post = async (
  endpoint: Endpoints,
  body?: object,
  headers?: object
) => await _fetch(Methods.post, endpoint, headers, body);
export const _patch = async (
  endpoint: Endpoints,
  body?: object,
  headers?: object
) => await _fetch(Methods.patch, endpoint, headers, body);
export const _delete = async (
  endpoint: Endpoints,
  body?: object,
  headers?: object
) => await _fetch(Methods.delete, endpoint, headers, body);
