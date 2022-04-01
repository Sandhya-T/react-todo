import React,{useContext} from 'react';
import ToDoContext from '../../state/todo-context';
import styles from './ToDo.module.css'
import {FaTrash} from'react-icons/fa'

const ToDo = props => { 
    const context = useContext(ToDoContext);
    return (
        <div className={styles.todo}>
            {props.text}
            <button className={styles.button} onClick={() => context.deleteToDo(props.id)} ><FaTrash /></button>
        </div>
    )
}

export default ToDo;