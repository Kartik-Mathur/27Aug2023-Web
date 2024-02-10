import React from 'react'

const TodoItem = (props) => {
    let task = props.task;
  return (
    <div className='item'>{task}</div>
  )
}

export default TodoItem