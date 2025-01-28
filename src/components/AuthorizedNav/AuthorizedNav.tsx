import Link from "next/link";
import Button from "../Button";
import s from "./AuthorizedNav.module.css";

type AuthorizedNavProps = {
  onLogout: () => void;
  params: { boardId: string; taskId: string };
};

const AuthorizedNav = ({ onLogout, params }: Readonly<AuthorizedNavProps>) => (
  <nav className={s.nav}>
    <div className={s.nav__path}>
      {params.boardId && (
        <Link href="/" className="link">
          Boards
        </Link>
      )}
      {params.taskId && (
        <Link href={`/${params.boardId}`} className="link">
          Tasks
        </Link>
      )}
    </div>
    <Button onClick={onLogout}>Log out</Button>
  </nav>
);

export default AuthorizedNav;
