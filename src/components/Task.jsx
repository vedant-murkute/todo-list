// import { useState } from "react";
import "../App.css";

const Task = ({ task, onTaskChange, onDeleteTask }) => {
  const handleTaskNameChange = (event) => {
    //on double click
    if (event.detail === 2) {
      let newTask = prompt("please enter new task", task.title);
      return onTaskChange(task.id, task.status, newTask);
    }
  };

  const handleStatusChange = (event) => {
    if (event.detail === 1) {
      return onTaskChange(task.id, !task.status, task.title);
    }
  };

  return (
    <div
      onClick={handleTaskNameChange}
      className={task.status ? "task-complete" : "task"}
    >
      <input
        type="checkbox"
        name="checkStatus"
        checked={task.status}
        onClick={handleStatusChange}
        onChange={handleStatusChange}
      ></input>
      <p>{task.title}</p>
      <button
        type="button"
        name="Delete"
        onClick={() => onDeleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
