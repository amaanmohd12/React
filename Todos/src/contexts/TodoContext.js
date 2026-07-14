import {createContext, useContext} from 'react';

const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo:"Learn React", 
            completed: false
        }
    ],
    addTodo: () => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export default TodoProvider = TodoContext.Provider