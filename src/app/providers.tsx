import { queryClient } from "@/shared/api/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

// в этом компоненте описываются все глобальные провайдеры приложения.
export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider> // прокидываем queryClient, чтобы можно было использовать его хуки во всех компонентах приложения.
  );
}
