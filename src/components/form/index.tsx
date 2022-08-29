import React from "react";
import Button from "../button";
import style from "./Form.module.scss";

export default class Form extends React.Component {
  state = {
    task: "",
    time: "00:00",
  };
  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  render() {
    return (
      <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="task">To do</label>
          <input
            type="text"
            name="task"
            onChange={(event) =>
              this.setState({ ...this.state, task: event.target.value })
            }
            id="task"
            placeholder="Enter your task"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">Time</label>
          <input
            type="time"
            name="time"
            value={this.state.time}
            onChange={(event) =>
              this.setState({ ...this.state, time: event.target.value })
            }
            step="1"
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button>Add</Button>
      </form>
    );
  }
}
