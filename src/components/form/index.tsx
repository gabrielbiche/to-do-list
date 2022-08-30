import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { ITask } from "../../types/task";
import Button from "../button";
import style from "./Form.module.scss";

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export default function From({ setTasks }: Props) {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks((oldTasks) => [
      ...oldTasks,
      { task, time, selected: false, completed: false, id: uuidv4() },
    ]);
    setTask("");
    setTime("00:00");
  }

  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">To do</label>
        <input
          type="text"
          name="task"
          onChange={(event) => setTask(event.target.value)}
          id="task"
          value={task}
          placeholder="Enter your task"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Time</label>
        <input
          type="time"
          name="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          step="1"
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit">Add</Button>
    </form>
  );
}
