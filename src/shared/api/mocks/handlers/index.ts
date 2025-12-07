import { HttpResponse } from "msw"; // msw это библиотека, позволяющая описывать моки запросов.
import { http } from "../http";
import type { ApiSchemas } from "../../schema";

const boards: ApiSchemas["Board"][] = [
  {
    id: "board-1",
    name: "Marketing Campaign",
  },
  {
    id: "board-2",
    name: "Product Roadmap",
  },
];

export const handlers = [
  http.get("/boards", () => {
    return HttpResponse.json(boards); // описываем, что запрос на /boards отдает нам boards - моковые данные.
  }),
  http.post("/boards", async (ctx) => {
    const data = await ctx.request.json();
    const board = {
      id: crypto.randomUUID(),
      name: data.name,
    };
    boards.push(board);
    return HttpResponse.json(board);
  }),
];
