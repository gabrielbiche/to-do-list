import React from "react";
import style from "./List.module.scss";
import Item from "./item";

export default function List() {
  const tasks = [
    {
      task: "test01",
      time: "01:00:00",
    },
    {
      task: "test02",
      time: "02:00:00",
    },
  ];

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
