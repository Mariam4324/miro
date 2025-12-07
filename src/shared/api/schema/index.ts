import type { components, paths } from "./generated";

// реекспорт с удобными названиями
export type ApiPaths = paths; // Импортируем только типы данных, а не исполняемый код. Это помогает оптимизировать конечную сборку проекта.
export type ApiSchemas = components["schemas"];