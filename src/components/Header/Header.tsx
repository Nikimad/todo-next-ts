import s from "./Header.module.css";

const Header = ({
  isHidden,
  children,
}: Readonly<{ isHidden: boolean; children: React.ReactNode }>) => (
  <header inert={isHidden} className={`${s.header} ${isHidden ? s.header_hidden : ""}`}>
    {children}
  </header>
);

export default Header;
