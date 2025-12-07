import { Outlet } from "react-router-dom";
import { AppHeader } from "@/features/header";
import { Providers } from "./providers";

export function App() {
  return (
    <>
      {/* оборачиваем всё приложение в глобальный провайдер чтобы иметь возможность использовать queryClient и другие инструменты во всех компонентах приложения */}
      <Providers>
        <AppHeader />
        {/* специальный компонент из react-router-dom который рендерит дочерние роуты. */}
        <Outlet />
      </Providers>
    </>
  );
}
