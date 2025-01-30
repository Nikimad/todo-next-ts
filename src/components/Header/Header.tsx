import s from "./Header.module.css";

const Header = ({
  isHidden,
  children,
}: Readonly<{ isHidden: boolean; children: React.ReactNode }>) => (
  <header className={`${s.header} ${isHidden ? s.header_hidden : ""}`}>
    {children}
  </header>
);

export default Header;
