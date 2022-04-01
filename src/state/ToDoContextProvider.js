import React, { useState, useEffect } from 'react';
import ToDoContext from './todo-context';

const todoItems = [{id: 0, text:'Buy Groceries'}, {id: 1, text:'Cook Lunch'}];
const ToDoContextProvider = (props) => {


    const [todoList, setToDoList] = useState(todoItems);

    const addToDoHandler = (item) => {
        setToDoList((prevToDos) => {return [...prevToDos, item]})
    }

    const deleteToDoHandler = (id) => {
        const index = todoList.findIndex(todo => todo.id === id);
        setToDoList((prevToDos) => {
            console.log(prevToDos);
            const updatedItems = [...prevToDos];
             updatedItems.splice(index,1);
             return updatedItems;
        });
    }

    const deleteAllToDosHandler = () => {
        setToDoList([]);
    }

    const context = {
        todos : todoList,
        addToDo: addToDoHandler,
        deleteToDo: deleteToDoHandler,
        deleteAllToDos: deleteAllToDosHandler
    }

    return (
        <ToDoContext.Provider value={context}>
            {props.children}
        </ToDoContext.Provider>
    );
}

export default ToDoContextProvider;