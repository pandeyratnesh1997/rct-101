import React,{useState} from "react";
import styles from './Todo.module.css';

export const Todoitem = ({item,onDelete})=>{
    const [status, setStatus] = useState(item.status);
    return(
    <div className={styles.todoInput && styles.cont }>
            <div>
                <input type="checkbox" checked={status} onChange={(e)=>{
                    setStatus(e.target.checked);
                    console.log(e);
                }}/>
            </div>
        <div className={status ? styles.striked : ""}
         key={item.id}>{item.value}</div>
        <button onClick={()=>onDelete(item.id)}>Delete</button>
    </div>
    )
}