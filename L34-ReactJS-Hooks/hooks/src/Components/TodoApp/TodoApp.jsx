import React from "react";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import Styles from './TodoApp.module.css';
let taskList = ["Coding", "Swimming", "Dancing", "Lunch"];

const TodoApp = () => {
  return (
  <div className={Styles["container"]}>
    <TodoInput />
    <TodoList taskList={taskList} />
  </div>
  )
};

export default TodoApp;
