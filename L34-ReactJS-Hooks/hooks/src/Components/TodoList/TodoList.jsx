import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import Styles from './TodoList.module.css';

const TodoList = ({ taskList, decreasePriority }) => {
  return (
    <div className={Styles["taskList"]}>
      {taskList.map(item=> <TodoItem decreasePriority={decreasePriority} task={item} />)}
    </div>
  );
};

export default TodoList;
