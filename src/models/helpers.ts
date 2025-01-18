import { Errors } from "@/lib/types";

export type FetchResponse<Type = undefined> = [
  errors: Errors,
  narrowData?: Type,
]; //@refactor: Payload
