"use client";

import { useAppSelector } from "@/models/hooks";
import { statusSelectors } from "@/models/features/status/selectors";
import Header from "./Header";

const HeaderContainer = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const isOk = useAppSelector(statusSelectors.selectIsOk);
  return <Header isHidden={!isOk}>{children}</Header>;
};

export default HeaderContainer;
