import React, { useEffect, useState } from "react";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import Styles from "./TodoApp.module.css";
let initialTaskList = ["Coding", "Swimming", "Dancing", "Lunch"];

const TodoApp = () => {
  let [taskList, setTaskList] = useState([]);
  function addTask(t) {
    //  Wrong Way
    // let newTaskList  = taskList;
    // newTaskList.push(t);

    setTaskList((prevState) => {
      return [...prevState, t];
    });
  }

  function decreasePriority(taskName) {
    let newArr = [...taskList];
    let indx = newArr.indexOf(taskName);
    let temp = newArr[indx];
    newArr[indx] = newArr[indx+1];
    newArr[indx+1] = temp;
    setTaskList(newArr);
  }

  return (
    <div className={Styles["container"]}>
      <TodoInput addTask={addTask} />
      <TodoList decreasePriority={decreasePriority} taskList={taskList} />
    </div>
  );
};

export default TodoApp;
