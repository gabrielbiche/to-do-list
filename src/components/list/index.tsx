import style from "./List.module.scss";
import Item from "./item";
import { ITask } from "../../types/task";

export default function List({ tasks }: { tasks: ITask[] }) {
  return (
    <aside className={style.todoList}>
      <h2>Tasks of the day</h2>
      <ul className={style.item}>
        {tasks.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}
