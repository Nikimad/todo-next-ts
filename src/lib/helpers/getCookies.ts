import { SetCookies } from "../types";

function getCookie(cookies: SetCookies, name: string) {
  const matches = cookies.flatMap((cookie) =>
    cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    )
  );
  return matches ? matches[1] && decodeURIComponent(matches[1]) : undefined;
}

export default getCookie;
