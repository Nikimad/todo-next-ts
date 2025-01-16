import Link from "next/link";
import s from "./Header.module.css";

const Header = () => (
  <header className={s.header}>
    <Link href="/signin" className="link">Sign in</Link>
    <Link href="/signup" className="link">Sign up</Link>
  </header>
);

export default Header;
