import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers); // хендлеры с моками прокидываются в специальный setupWorker(использует браузерный API, который перехватывает запросы браузера к серверу и кешировать его, и msw использует этот API для подстановки моковых данных). А сам worker регистрируется в main.tsx.
