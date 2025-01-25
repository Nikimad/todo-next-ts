import BoardCreator from "@/components/_WithRedux/BoardCreator";
import Boards from "@/components/_WithRedux/Boards";

const BoardsPage = () => (
  <>
    <h2>Boards</h2>
    <BoardCreator />
    <Boards />
  </>
);

export default BoardsPage;
