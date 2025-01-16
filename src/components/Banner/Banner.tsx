import { Errors } from "@/lib/types";
import Link from "next/link";
import s from "./Banner.module.css";

const Banner = ({ errors }: Readonly<{errors: Errors }>) => (
  <div className={s.banner}>
    <h1 className={s.banner__text}>ToDo</h1>
    <div className={s.banner__message}>
      <p className={s.banner__text}>
        What is a ToDo List? The definition is a simple one. It’s a list of
        tasks you need to complete or things that you want to do
      </p>
      <p className={s.banner__text}>Here you can get one</p>
      <Link href="/signin" className={`link ${s.banner__link}${errors ? " link_disabled" : ""}`}>
        {!errors ? "Create list" : "Sorry, creating a list is currently unavailable" }
      </Link>
    </div>
  </div>
);

export default Banner;
