import { CONFIG } from "@/shared/model/config";
import { ROUTES } from "@/shared/model/routes";
import { href, Link } from "react-router-dom";

function BoardsListPage() {
  return (
    <>
      <h1>Boards list</h1>
      <Link to={href(ROUTES.BOARD, { boardId: "1" })}>Board 1</Link>
      <div>{CONFIG.API_BASE_URL}</div>
    </>
  );
}

export const Component = BoardsListPage; // переименование для того, чтобы работал react-router-dom - по синтаксису он требует переименования в Component
