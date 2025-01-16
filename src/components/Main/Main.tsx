"use client";

import {  useContext } from "react";
import { SessionContext } from "../SessionContext";
import Todos from "../Todos";
import Banner from "../Banner"

const Main = () => {
  const ctx = useContext(SessionContext);
  const isUserAuthorized = Boolean(ctx && ctx.isUserHasScope);

  return isUserAuthorized ? <Todos /> : <Banner />;
};

export default Main;
