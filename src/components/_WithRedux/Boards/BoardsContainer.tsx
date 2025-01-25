"use client";

import { useAppSelector } from "@/models/hooks";
import { boardsSelectors } from "@/models/features/boards/selectors";
import Boards from "./Boards";

const BoardsContainer = () => {
    const boards = useAppSelector(boardsSelectors.selectAll);
    console.log(boards);
    return <Boards boards={boards} />;
};

export default BoardsContainer;
