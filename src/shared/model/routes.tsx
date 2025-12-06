import "react-router-dom";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  BOARDS: "/boards",
  BOARD: "/boards/:boardId", // :boardId означает, что здесь есть параметр и как к этому параметру обращаться
} as const; // описание роутов всего приложения, хорошо когда это все лежит в одном месте, нет смысла декомпозировать так как это статично.

export type PathParams = {
  [ROUTES.BOARD]: {
    boardId: string;
  };
};

declare module "react-router-dom" {
  interface Register {
    // специальный интерфейс для переопределения типов. Чтоб типизировать параметры url.
    params: PathParams;
  }
}
