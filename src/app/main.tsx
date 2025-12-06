import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* располагаем App внутри роутера, чтобы был доступ к роутеру сразу в App */}
    <RouterProvider router={router} />
  </StrictMode>,
);
