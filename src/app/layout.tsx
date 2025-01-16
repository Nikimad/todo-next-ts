import type { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import "@/global.css";
import Header from "@/components/Header";
import SessionProvider from "@/components/SessionContext";

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
        <SessionProvider>
          <Header />
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
