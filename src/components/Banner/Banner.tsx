import s from "./Banner.module.css";

export type BannerProps = Readonly<{ children?: React.ReactNode; message?: string }>;

const Banner = ({ message, children }: BannerProps) => (
  <div className={s.banner}>
    <p className={s.banner__message}>{message ? message : "Login is required to see the list"}</p>
    {children}
  </div>
);

export default Banner;
