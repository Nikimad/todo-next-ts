import s from "./Banner.module.css";

type BannerProps = { message: string };

const Banner = ({ message }: Readonly<BannerProps>) => (
  <div className={s.banner}>
    <p>{message ? message : "Login is required to see the list"}</p>
  </div>
);

export default Banner;
