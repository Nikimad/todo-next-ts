import Link from "next/link";
import Button from "../Button";
import s from "./AuthorizedNav.module.css";

type AuthorizedNavProps = {
  onLogout: () => void;
  params: { boardId: string; taskId: string };
};

const AuthorizedNav = ({ onLogout, params }: Readonly<AuthorizedNavProps>) => (
  <>
    <div className={s.nav__path}>
      {params.boardId ? (
        <Link href="/" className="link">
          Boards
        </Link>
      ) : (
        <h2 className={s.nav__path__name}>Boards</h2>
      )}
      {params.taskId ? (
        <>
          <Link href={`/${params.boardId}`} className="link">
            Tasks
          </Link>
          <h2 className={s.nav__path__name}>Todos</h2>
        </>
      ) : (
        params.boardId && <h2 className={s.nav__path__name}>Tasks</h2>
      )}
    </div>
    <Button onClick={onLogout}>Log out</Button>
  </>
);

export default AuthorizedNav;
