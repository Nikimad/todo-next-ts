"use client";

import { useAppSelector } from "@/models/hooks";
import { authorizationSelectors } from "@/models/features/authorization/selectors";
import Banner from "./Banner";

const BannerContainer = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const isUserAuthorized = useAppSelector(
    authorizationSelectors.selectIsUserAuthorized
  );
  const message = ""; //status

  return !isUserAuthorized || message ? <Banner message={message} /> : children;
};

export default BannerContainer;
