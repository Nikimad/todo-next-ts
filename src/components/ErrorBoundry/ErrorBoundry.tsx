"use client";

import { useAppSelector } from "@/models/hooks";
import { statusSelectors } from "@/models/features/status/selectors";
import ErrorBanner from "../ErrorBanner";

const ErrorBoundry = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const isOk = useAppSelector(statusSelectors.selectIsOk);
  return isOk ? children : <ErrorBanner />;
};

export default ErrorBoundry;
