import Link from "next/link";
import s from "./Nav.module.css";

const Nav = ({ pathname }: { pathname: string }) => (
  <nav className={s.nav}>
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
  </nav>
);

export default Nav;
