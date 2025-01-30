"use client";

import { useAppSelector } from "@/models/hooks";
import { authorizationSelectors } from "@/models/features/authorization/selectors";
import Banner, { type BannerProps } from "./Banner";

const BannerContainer = ({
  message,
  children,
}: BannerProps) => {
  const isUserAuthorized = useAppSelector(
    authorizationSelectors.selectIsUserAuthorized
  );

  return !isUserAuthorized || message ? <Banner message={message} /> : children;
};

export default BannerContainer;
