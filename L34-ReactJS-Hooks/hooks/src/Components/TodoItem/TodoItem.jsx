import React from "react";

const TodoItem = ({task,decreasePriority}) => {
    let btnUpStyle = {
        backgroundColor: "red"
    };

    function decreasePriorityHandler(ev){
      let taskName = ev.target.previousElementSibling.previousElementSibling;
      decreasePriority(taskName);
    }
  return (
    <div className="taskItem">
      <span>{task}</span>
      <button style={btnUpStyle}>↑</button>
      <button onClick={decreasePriorityHandler}>↓</button>
      <button>❌</button>
    </div>
  );
};

export default TodoItem;
