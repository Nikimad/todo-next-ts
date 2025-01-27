import type { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import "@/global.css";
import ReduxProvider from "@/components/Redux";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Nav from "@/components/Nav";

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
            <Nav />
          </Header>
          <Main>{children}</Main>
        </ReduxProvider>
      </body>
    </html>
  );
}
