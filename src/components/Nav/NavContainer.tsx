"use client";

import { usePathname } from "next/navigation";
import { useAppSelector } from "@/models/hooks";
import { authorizationSelectors } from "@/models/features/authorization/selectors";
import Nav from "./Nav";

const NavContainer = () => {
  const pathname = usePathname();
  const isUserAuthorized = useAppSelector(
    authorizationSelectors.selectIsUserAuthorized
  );

  return <Nav pathname={pathname} isUserAuthorized={isUserAuthorized} />
};

export default NavContainer;
