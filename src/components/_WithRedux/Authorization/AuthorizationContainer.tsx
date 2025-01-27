"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/models/hooks";
import { authorizationSelectors } from "@/models/features/authorization/selectors";
import Authorization from "./Authorization";

const AuthorizationContainer = () => {
  const { replace } = useRouter();
  const isUserAuthorized = useAppSelector(
    authorizationSelectors.selectIsUserAuthorized
  );

  useEffect(() => {
    if (isUserAuthorized) replace("/");
  }, [isUserAuthorized, replace]);

  return !isUserAuthorized && <Authorization />;
};

export default AuthorizationContainer;
