import React from 'react'

const Todo = ({ todo, onComplete, onRemove }) => {
    return (
        <>
            <li className={['todo__item', todo.complete ? 'done' : ''].join(' ')} >
                <input id={todo.id} type='checkbox' checked={todo.complete} onChange={() => onComplete(todo)} />
                <label htmlFor={todo.id}>{todo.job} <strong className='todo__time'>{todo.hour} : {todo.minute}</strong></label>
                <span className='btn-delete' onClick={() => onRemove(todo.id)}>+</span>
            </li >
        </>
    )
}

export default Todo