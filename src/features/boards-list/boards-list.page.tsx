import { rqClient } from "@/shared/api/instance";
import { CONFIG } from "@/shared/model/config";
import { ROUTES } from "@/shared/model/routes";
import { href, Link } from "react-router-dom";

function BoardsListPage() {
  const boardsQuery = rqClient.useQuery("get", "/boards");

  console.log(boardsQuery.data);

  return (
    <>
      <h1>Boards list</h1>

      {boardsQuery.data?.map((board) => {
        return (
          <Link key={board.id} to={href(ROUTES.BOARD, { boardId: board.id })}>
            {board.name}
          </Link>
        );
      })}
      <div>{CONFIG.API_BASE_URL}</div>
    </>
  );
}

export const Component = BoardsListPage; // переименование для того, чтобы работал react-router-dom - по синтаксису он требует переименования в Component
