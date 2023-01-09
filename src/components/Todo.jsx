import { useState, useEffect } from "react";
import Task from "./Task";
import Footer from "./Footer";
// import { uuid } from "uuidv4";

//status is true then task completed (green) else active - false (red)
const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [filter, setFilter] = useState("all");
  const [id,setId] = useState(0);

  let tasksToBeDisplayed=[...tasks];
  if (filter === "active") {
    tasksToBeDisplayed = tasks.filter(task => !task.status);
  } else if(filter === "completed"){
    tasksToBeDisplayed = tasks.filter(task => task.status);
  }
  
  
  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleAddTask = () => {
    setTasks([...tasks, { id: id ,title: taskName, status: false }]);
    setId(id+1);
    setTaskName("");
  };

  const handleTaskChange = (idToBeChanged, status, title) => {
    setTasks(
      tasks.map(task => {
        if (task.id === idToBeChanged) {
          return {
            ...task,
            status: status,
            title:title
          };
        } else {
          return task;
        }
      })
    );
  };

  const handleFilter = (filterCategory) => {
    setFilter(filterCategory);
  };

  const handleClearCompleted = () => { //remove tasks with status true
    setTasks( tasks.filter(task => !task.status ) );
  }

  const handleDeleteTask = (idToBeDeleted) => {
    setTasks(tasks.filter(task => idToBeDeleted!=task.id));
  }

  return (
    <div>
      <div className="addTask">
        <input
          type="text"
          name="task"
          value={taskName}
          onChange={handleTaskNameChange}
        ></input>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      {tasksToBeDisplayed.map(task => 
        <Task
          task={task}
          key={task.id}
          onTaskChange={handleTaskChange}
          onDeleteTask={handleDeleteTask}
        />)}
      <Footer onFilter={handleFilter} onClearCompleted={handleClearCompleted} />
    </div>
  );
};

export default Todo;
