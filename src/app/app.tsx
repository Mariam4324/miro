import { Outlet } from "react-router-dom";
import { AppHeader } from "@/features/header";

export function App() {
  return (
    <>
      <AppHeader />
      {/* специальный компонент из react-router-dom который рендерит дочерние роуты. */}
      <Outlet />
    </>
  );
}
