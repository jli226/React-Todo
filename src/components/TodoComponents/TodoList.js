// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  console.log(props.tasks);
  return (
    <div>
      {props.tasks.map(task => (
        <Todo
          key={task.id}
          id={task.id}
          task={task.task}
          completed={task.completed}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
    </div>
  );
};

export default TodoList;
