import s from "./Main.module.css";

const Main = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <main className={s.main}>{children}</main>
);

export default Main;
