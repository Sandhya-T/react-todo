import React, { useContext } from 'react';
import styles from './ToDoFooter.module.css';
import ToDoContext from '../../state/todo-context';

const ToDoFooter = props => {
    const context = useContext(ToDoContext);
    return (
        <div>
            You have {context.todos.length} pending tasks
            <button className={styles.button} onClick={() => {context.deleteAllToDos()}}>Clear All</button>
        </div>
    )
}

export default ToDoFooter