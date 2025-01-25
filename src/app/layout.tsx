import type { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import "@/global.css";
import Link from "next/link";
import ReduxProvider from "@/components/Redux";
import Header from "@/components/_WithRedux/Header";
import Main from "@/components/_WithRedux/Main";

const hankenGrotesk = Funnel_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Todo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`body ${hankenGrotesk.className}`}>
        <ReduxProvider>
          <Header>
            <Link href="/signin">Sign in</Link>
            <Link href="/signup">Sign up</Link>
          </Header>
          <Main>{children}</Main>
        </ReduxProvider>
      </body>
    </html>
  );
}
