import React from "react";
import TodoInput from "./TodoInput";
import styles from './Todo.module.css'
const Todo =()=>{
    return(
        <div className={styles.cont}>
            <TodoInput/>
            
        </div>
    )
}
export default Todo;
