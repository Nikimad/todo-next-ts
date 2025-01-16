"use server";

import { authenticate } from "@/lib/actions/authorization";
import SessionProvider from "./SessionContext";

const SessionProviderContainer = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [errors, initialScope] = await authenticate();

  return <SessionProvider errors={errors} initialScope={initialScope}>{children}</SessionProvider>;
};

export default SessionProviderContainer;
