import React from "react";
import Button from "../button";

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="task">To do</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Enter your task"
            required
          />
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <input
            type="time"
            name="time"
            step="1"
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button />
      </form>
    );
  }
}
