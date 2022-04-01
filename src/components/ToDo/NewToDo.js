import styles from './NewToDo.module.css'
import { useContext, useRef } from 'react';
import ToDoContext from '../../state/todo-context';
import { FaPlus } from "react-icons/fa";

const NewToDo = props => {
    const context = useContext(ToDoContext);
    const inputRef = useRef();
    const addNewToDo = () => {
        const value = inputRef.current.value;
        if(value === '') {
            alert('Please enter task text');
            return;
        }
        context.addToDo({id:(new Date().getTime()), text: value});
        inputRef.current.value = '';
    }
    return (
        <div className={styles.newtodo}>
            <input className={styles.input} type="text" placeholder='Add your new todo' ref={inputRef}  />
            <button className={styles.button} onClick={addNewToDo}><FaPlus /></button>
        </div>
    )

}

export default NewToDo;