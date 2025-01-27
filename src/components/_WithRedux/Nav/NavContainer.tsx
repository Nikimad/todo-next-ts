"use client";

import { usePathname } from "next/navigation";
import { useAppSelector } from "@/models/hooks";
import { authorizationSelectors } from "@/models/features/authorization/selectors";
import AuthorizedNav from "../AuthorizedNav";
import Nav from "./Nav";

const NavContainer = () => {
    const pathname = usePathname();
    const isUserAuthorized = useAppSelector(authorizationSelectors.selectIsUserAuthorized);

    return isUserAuthorized ? <AuthorizedNav /> : <Nav pathname={pathname} />
};

export default NavContainer;
