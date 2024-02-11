import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import Styles from './TodoList.module.css';

const TodoList = ({ taskList }) => {
  return (
    <div className={Styles["taskList"]}>
      {taskList.map(item=> <TodoItem task={item} />)}
    </div>
  );
};

export default TodoList;
