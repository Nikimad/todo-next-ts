import { SetCookies } from "../types";
import { cookies } from "next/headers";
import getCookie from "./getCookies";

const sessionKey = "_session_id";

export const sessionAdapter = {
  setSession: async (setCookies?: SetCookies) => {
    if (!setCookies) return;
    const cookiesStore = await cookies();
    const session = getCookie(setCookies, sessionKey);
    if (session) cookiesStore.set(sessionKey, session);
  },
  deleteSession:async () => {
    const cookiesStore = await cookies();
    cookiesStore.delete(sessionKey);
  }
};
