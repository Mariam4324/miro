export { BoardCard } from "./board-card.js"; // public api - все модули, которые могут использоваться снаружи. Упрощение работы с локальными модулями. Заходя сюда мы можем понять какие модули мы можем внутри перемещать без страха, что сломаем что-то.

export function BoardsListPage() {
  return <div>Boards list</div>;
}
