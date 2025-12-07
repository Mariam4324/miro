import createFetchClient from "openapi-fetch"; // предоставляют легковесную обертку над стандартным браузерным fetch() в которую можно через дженерик вставить тип запроса, использует информацию из сгенерированного(npm run api) файла generated.ts, чтобы предоставить готовые, типобезопасные функции для запросов к бэкенду.
import createClient from "openapi-react-query"; // Обертка над библиотекой управления состоянием сервера React Query(сейчас уже называется TanStack Query). Она предоставляет готовые хуки (например, useQuery, useMutation) для выполнения запросов. Использование React Query избавляет от необходимости вручную писать логику для загрузки данных, кэширования, обработки ошибок, повторных запросов и состояния загрузки.
import { CONFIG } from "../model/config";
import type { ApiPaths } from "./schema";
// import { CONFIG } from "@shared/model/config";

// здесь делаются запросы
export const fetchClient = createFetchClient<ApiPaths>({
  // можно через дженерик вставить тип, строготипизированный запрос.
  baseUrl: CONFIG.API_BASE_URL,
});

export const rqClient = createClient(fetchClient);

// делаем запрос, ручное управление состоянием(isLoading, isError).
// fetchClient.GET("/boards").then((res) => {
//   if (res.data) {
//     console.log(res.data);
//   }

//   if (res.error) {
//     console.log(res.error);
//   }
// });

// делаем запрос, автоматизированное управление состоянием сервера.
// const res = rqClient.useQuery("get", "/boards");
// console.log(res.data);
