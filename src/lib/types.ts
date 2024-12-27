export type Errors = {
  [key: string]: string | string[];
};

export type User = {
  id: string | number;
  username: string;
  is_admin: boolean;
};
