import React from "react";
import "./style.scss";

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
    <aside className="todoList">
      <h2>Tasks of the day</h2>
      <ul className="item">
        {tasks.map((item, index) => (
          <li className="item" key={index}>
            <h3>{item.task}</h3>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
