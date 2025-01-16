import type { Errors, Payload } from "@/lib/types";
import  type { Scope, User, List } from "./actions/authorization";
import { Endpoints } from "@/lib/endpoints";
import { Lists } from "./actions/authorization";

import { errors } from "./errors";
import { _get, _post } from "@/lib/helpers/_fetch";

type ScopePayload = Promise<Payload<Scope>>;
type ListPayload = Promise<Payload<List>>;

const indexList = async (scope: Scope): ListPayload => {
  const listDraft = {
    title: Lists.Todos,
    question_type: "multiple",
  };

  const [error, list] = await _post(
    `${Endpoints.Index}/${scope.id}/${Endpoints.List}`,
    listDraft
  );

  if (error) {
    console.log("Index list:", error);
    return [errors["500"]];
  }

  return [null, list as List];
};

const indexScope = async (scopeKey: string): ScopePayload => {
  const [scopeError, data] = await _post(Endpoints.Index, {
    title: scopeKey,
  });

  if (scopeError) {
    console.log("Index scope", scopeError);
    return [errors["500"]];
  }

  const scope = data as Scope;
  const [error, list] = await indexList(scope);

  if (error) {
    console.log("Index scope index list:", error);
    return [errors["500"]];
  }

  if (list) scope.questions = [list];

  return [null, scope];
};

const getScope = async (scopeKey: string): ScopePayload => {
  const searchParams = new URLSearchParams({ search: scopeKey.toLocaleLowerCase() });
  const [error, scopes] = (await _get(Endpoints.Index, searchParams)) as [
    Errors,
    { tests: Scope[] }
  ];

  if (error) {
    console.log("Get scope", error);
    return [errors["500"]];
  }

  if (scopes.tests.length > 0) return [null, scopes.tests[0]];
  if (scopes.tests.length === 0) return await indexScope(scopeKey);

  return [errors["500"]];
};

const getUserScope = async (
  user: User,
  isSignup?: boolean
): ScopePayload => {
  const scopeKey = `${user.id}${user.username}`;
  
  if (isSignup) return await indexScope(scopeKey);

  const [error, scope] = await getScope(scopeKey);
  if (error) return [error];
  if (scope?.questions.some(({ title }) => title === Lists.Todos)) return [null, scope];

  return [errors["403"]];
};

export default getUserScope;
