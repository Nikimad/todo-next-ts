import { Errors } from "@/lib/types";

export type FetchResponse<Type = undefined> = [
  errors: Errors,
  narrowData?: Type
]; //@refactor: Payload

export type IfEquals<T, U, Y = unknown, N = never> = (<G>() => G extends T
  ? 1
  : 2) extends <G>() => G extends U ? 1 : 2
  ? Y
  : N;
