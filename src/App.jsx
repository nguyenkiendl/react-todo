import React, {
    useState
} from 'react'
import Header from './components/todo/header/Header'
import TodoList from './components/todo/TodoList'

const App = () => {

    const storageTodoList = JSON.parse(localStorage.getItem('todoList'))

    const [todoList, setTodoList] = useState(storageTodoList ?? []);

    const handleSubmit = (item) => {
        item.id = todoList.length + 1

        setTodoList(prevTodoList => {
            const newTodoList = [...prevTodoList, item]
            // save local storage
            const jsonTodoList = JSON.stringify(newTodoList)
            localStorage.setItem('todoList', jsonTodoList)
            return newTodoList
        })

    }

    const handleRemove = (id) => {
        const newTodoList = todoList.filter((item) => item.id !== id);
        const jsonTodoList = JSON.stringify(newTodoList)
        localStorage.setItem('todoList', jsonTodoList)
        setTodoList(newTodoList)
    }

    const handleComplete = (todo) => {
        const newTodoList = todoList.map(item => {
            if (item.id === todo.id) {
                const updateItem = {
                    ...item,
                    complete: !item.complete
                }
                return updateItem
            }
            return item
        })
        const jsonTodoList = JSON.stringify(newTodoList)
        localStorage.setItem('todoList', jsonTodoList)
        setTodoList(newTodoList)

    }

    return (
        <>
            <div className='container'>
                <h1>Todo List</h1>
                <div className='todo'>
                    <Header total={todoList.length} onSubmit={handleSubmit} />
                    <TodoList todoList={todoList} onComplete={handleComplete} onRemove={handleRemove} />
                </div>
            </div>
        </>
    )
}

export default App