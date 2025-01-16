import Link from "next/link";
import HeaderContainer from "./HeaderContainer";
import s from "./Header.module.css";

const Header = () => (
  <header className={s.header}>
    <HeaderContainer>
      <Link href="/signin" className="link">
        Sign in
      </Link>
      <Link href="/signup" className="link">
        Sign up
      </Link>
    </HeaderContainer>
  </header>
);

export default Header;
