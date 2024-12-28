import { FetchWrapperResult } from "@/lib/types";

type SigninData = {
  username: string;
  password: string;
};

type SignupData = {
  password_confirmation: string;
  is_admin: boolean;
};

type User = {
  id: string | number;
  username: string;
  is_admin: boolean;
};

export type InputData = SigninData & SignupData;
export type UserDataResult = FetchWrapperResult<User>;
