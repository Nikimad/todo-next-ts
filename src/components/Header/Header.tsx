import s from "./Header.module.css";

const Header = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <header className={s.header}>{children}</header>
);

export default Header;
