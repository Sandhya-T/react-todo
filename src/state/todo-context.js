import React from "react";

const ToDoContext = React.createContext({
    todos : [],
    addToDo: (todo) => {},
    deleteToDo: (id) => {},
    deleteAllToDos: () => {}
})

export default ToDoContext;