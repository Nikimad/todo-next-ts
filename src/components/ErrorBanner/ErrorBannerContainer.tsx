"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import ErrorBanner from "./ErrorBanner";
import { useAction, useAppSelector } from "@/models/hooks";
import { statusSelectors } from "@/models/features/status/selectors";
import { statusActions } from "@/models/features/status";

const ErrorBannerContainer = () => {
  const isLoading = useAppSelector(statusSelectors.selectIsLoading);
  const setIsLoading = useAction(statusActions.setIsLoading);
  const { refresh } = useRouter();

  const handleSetIsloading = useCallback(() => isLoading || setIsLoading(true), [isLoading, setIsLoading])

  const handleReset = useCallback(() => {
    handleSetIsloading();
    refresh();
  }, [handleSetIsloading, refresh]);

  return (<ErrorBanner message="Opps, something went wrong" onReset={handleReset} isLoading={isLoading} />);
};

export default ErrorBannerContainer;
