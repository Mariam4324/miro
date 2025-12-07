// подгружает типы
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
} // Это обеспечивает строгую типизацию для кастомных переменных окружения, определенных в файле .env. Когда вы пишете код import.meta.env.VITE_API_BASE_URL, редактор кода знает точный тип данных и может предотвратить ошибки, если попытаться использовать его неправильно.

interface ImportMeta {
  readonly env: ImportMetaEnv;
} //  это явно связывает кастомный интерфейс ImportMetaEnv с тем свойством env

// имена переменных окружения должны начинаться с VITE_, чтобы дать vite явно, что данные секретные.