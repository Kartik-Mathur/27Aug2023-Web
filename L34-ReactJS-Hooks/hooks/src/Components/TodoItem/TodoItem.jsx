import React from "react";

const TodoItem = ({task}) => {
    let btnUpStyle = {
        backgroundColor: "red"
    };
  return (
    <div className="taskItem">
      <span>{task}</span>
      <button style={btnUpStyle}>↑</button>
      <button>↓</button>
      <button>❌</button>
    </div>
  );
};

export default TodoItem;
