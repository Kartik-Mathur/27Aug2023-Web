import React from 'react'
import TodoList from './TodoList';

let tasks = [
    'Swimming',
    "Coding",
    'Dancing',
    "Khana"
];

const Todo = () => {
  return (
    <TodoList todos={tasks} />
  )
}

export default Todo