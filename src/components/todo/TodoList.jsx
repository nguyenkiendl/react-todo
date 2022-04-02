import React from 'react'
import Todo from './Todo'

const TodoList = ({ todoList, onComplete, onRemove }) => {
    todoList.sort((a, b) => {
        return (a.hour === b.hour) ? a.minute - b.minute : a.hour - b.hour
    })
    return (
        <>
            < ul className='todoList__container' >
                {
                    todoList.map((todo, index) => {
                        return (
                            < Todo key={index} todo={todo} onComplete={onComplete} onRemove={onRemove} />
                        )
                    })
                }
            </ul >
        </>
    )
}

export default TodoList