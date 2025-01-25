import type { UnnormolizeBoardEntity } from "@/models/features/boards";
import { getBoards } from "@/models/features/boards/api";
import ReduxProvider from "./ReduxProvider";

const ReduxProviderContainer = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [errors, data] = await getBoards();
  const boards = (data?.tests || []) as UnnormolizeBoardEntity[];

  return (
    <ReduxProvider errors={errors} unnormolizeState={{ boards }}>
      {children}
    </ReduxProvider>
  );
};

export default ReduxProviderContainer;
