"use client";

import { useActionState } from "react";
import signAction from "@/lib/actions/sign";
import Authorization from "./Authorization";

const AuthorizationContainer = () => {
  const [[errors, user], sign, isLoading] = useActionState(
    signAction,
    [null, null]
  );

  return <Authorization errors={errors} />;
};

export default AuthorizationContainer;
