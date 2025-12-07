import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

async function enableMocking() {
  if (import.meta.env.PROD) {
    return;
  }

  const { worker } = await import("@/shared/api/mocks/browser"); // динамический импорт, чтобы в продакшене этот код не добавлялся в приложение, это попадет в отдельный чанк и не загрузится в прод.
  return worker.start(); // запускаем воркер и после его запуска будет рендер приложения.
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      {/* располагаем App внутри роутера, чтобы был доступ к роутеру сразу в App */}
      <RouterProvider router={router} />
    </StrictMode>,
  );
});
