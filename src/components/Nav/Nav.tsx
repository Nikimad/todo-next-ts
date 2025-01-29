import Link from "next/link";
import AuthorizedNav from "../AuthorizedNav";
import s from "./Nav.module.css";

const Nav = ({
  pathname,
  isUserAuthorized,
}: {
  pathname: string;
  isUserAuthorized: boolean;
}) => (
  <nav className={s.nav}>
    {isUserAuthorized ? (
      <AuthorizedNav />
    ) : (
      <div className={s.nav__links}>
        {pathname !== "/signin" && (
          <Link className="link" href="/signin">
            Sign in
          </Link>
        )}
        {pathname !== "/signup" && (
          <Link className="link" href="/signup">
            Sign up
          </Link>
        )}
      </div>
    )}
  </nav>
);

export default Nav;
