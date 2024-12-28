"use server";

import { cookies as nextCookies } from "next/headers";
import { HTTP_METHOD } from "next/dist/server/web/http";
import { Endpoints } from "../endpoints";
import { FetchWrapperResult } from "../types";

const url = "https://interns-test-fe.snp.agency/api/v1";

type AnyDataResult = FetchWrapperResult<{ [key: string]: any }>;

type BodyObj = { [key: string]: unknown };

const _fetch = async (
  endpoint: Endpoints,
  options?: {
    method: HTTP_METHOD;
    body?: BodyObj;
  }
): Promise<AnyDataResult> => {
  const cookies = (await nextCookies()).toString();

  const headers = new Headers({
    "Content-Type": "application/json",
    "Scope-Key": "todo/scope",
    Cookie: cookies,
  });

  const body = options?.body && JSON.stringify(options?.body);
  const response = await fetch(`${url}/${endpoint}`, {
    ...(options || {}),
    body,
    headers,
  });

  const parsedRes = await response.json();

  return response.ok
    ? [null, parsedRes, response.headers.getSetCookie()]
    : [parsedRes];
};

export const _get = async (endpoint: Endpoints) =>
  await _fetch(endpoint, { method: "GET" });
export const _post = async (endpoint: Endpoints, body: BodyObj) =>
  await _fetch(endpoint, {
    method: "POST",
    body,
  });
export const _patch = async (endpoint: Endpoints, body: BodyObj) =>
  await _fetch(endpoint, {
    method: "PATCH",
    body,
  });
export const _delete = async (endpoint: Endpoints, body: BodyObj) =>
  await _fetch(endpoint, {
    method: "PATCH",
    body,
  });
