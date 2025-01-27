import Link from "next/link";

const Nav = ({ pathname }: { pathname: string }) => (
  <nav>
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
