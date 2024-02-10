import React from 'react'
import TodoItem from './TodoItem';

const TodoList = (props) => {
    let todos = props.todos;
    return (
        <ul>
            {
                todos.map((val)=>{
                    return <TodoItem task={val} />
                })
            }
        </ul>
    )
}
/*
const TodoList = (props) => {
    let todos = props.todos;
    return (
        <ul>
            {
            todos.map((item, indx) => {
                return <li className='task'>{item}</li>
            })
            }
        </ul>
    )
}
*/

export default TodoList