import { Errors } from "./types";

export enum FetchErrors {
    Ban= "You're banned",
    Down= "Something went wrong"
};

export const errors: { [key: string]: Errors } = {
  "500": { error: FetchErrors.Down },
  "403": { error: FetchErrors.Ban },
};