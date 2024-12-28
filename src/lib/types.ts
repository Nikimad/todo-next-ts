export type Errors = {
  [key: string]: string | string[];
};

export type FetchWrapperResult<Type> = [
  errors: Errors | null,
  data?: Type,
  setCookies?: string[]
];
