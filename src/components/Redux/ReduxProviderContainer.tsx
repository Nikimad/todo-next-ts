import ReduxProvider from "./ReduxProvider";
import getPreparedState from "@/lib/helpers/getPreparedState";

const ReduxProviderContainer = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const initialState = await getPreparedState();

  if (initialState.errors) return null;

  return (
    <ReduxProvider initialState={initialState}>
      {children}
    </ReduxProvider>
  );
};

export default ReduxProviderContainer;
