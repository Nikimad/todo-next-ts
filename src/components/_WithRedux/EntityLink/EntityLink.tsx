import Link from "next/link";
import s from "./EntityLink.module.css";

type EntityLinkProps = Readonly<React.AnchorHTMLAttributes<HTMLAnchorElement>>;

const EntityLink = ({ href, children }: EntityLinkProps) =>
  href ? (
    <Link href={String(href)} className={s.link}>
      {children}
    </Link>
  ) : (
    <span className={s.link}>{children}</span>
  );
export default EntityLink;
