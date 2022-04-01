import React, {useContext} from 'react';
import ToDo from './ToDo';
import styles from './ToDoList.module.css';
import ToDoContext from '../../state/todo-context';

const ToDoList = props => {
    const context = useContext(ToDoContext);
    return (
        <div className={styles['todo-list']}>
            {context.todos.map(todo => <ToDo key={todo.id} id={todo.id} text= {todo.text} />)}
        </div>
    )
}

export default ToDoList