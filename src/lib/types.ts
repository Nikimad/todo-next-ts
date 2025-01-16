export type SetCookies = string[];
export type ScopeKey = string;

export type Error = string | string[];
export type Errors = {
  [key: string]: Error;
} | null;

export type Payload<Type = undefined, Optional = undefined> = [
  errors: Errors,
  narrowData?: Type,
  context?: Optional
];

export type UnknownPayload = Payload<{ [key: string]: unknown }, SetCookies>;
