import type { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import "@/global.css";
import ReduxProvider from "@/components/Redux";
import ErrorBoundry from "@/components/ErrorBoundry";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Main from "@/components/Main";

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
          <ErrorBoundry>
            <Main>{children}</Main>
          </ErrorBoundry>
        </ReduxProvider>
      </body>
    </html>
  );
}
