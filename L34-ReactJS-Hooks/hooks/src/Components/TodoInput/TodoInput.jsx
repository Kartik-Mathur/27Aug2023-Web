import React, { useEffect, useState } from 'react'

const TodoInput = ({addTask}) => {
  const [taskVal, setTaskVal] = useState("");
  function changeHandler(ev){
    console.log(ev.target.value);
    setTaskVal(ev.target.value);
    // addTask(ev.target.value);
  }

  // const [clicked, setClicked] = useState(true);

  // function btnHandler(){
  //   setCnt(!clicked);
  // }

  // useEffect(()=>{
  //   console.log("Mei Chal Gaya")
  //   addTask(taskVal);
  // },[clicked]); // [] : Dependency Array
  function addTaskHandler(){
    addTask(taskVal);
  }
  return (
    <div>
        <input onChange={changeHandler} value={taskVal} type="text" placeholder='Enter Task Name' />
        <button onClick={addTaskHandler}>Add Task</button>
    </div>
  )
}

export default TodoInput