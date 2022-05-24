import React, { useState } from "react";
import styles from './Todo.module.css'
import {Todoitem} from './Todoitem'
 const TodoInput = ()=>{
     const [value,setValue] = useState("")
     const [todo,setTodo] = useState([]);
     const onDelete = (id)=>{
         let newTodo = todo.filter((item) => item.id!==id);
         setTodo(newTodo);
     }
     return(
         <div>
             <input className={styles.todoInput} value={value}
              onChange={(e)=>setValue(e.target.value)}  placeholder="Write Something"/>
             <button className={styles.add} 
             onClick={()=>{setTodo([...todo,{id : Date.now() ,value : value, status : false}])
                setValue("");
             }}>+</button>

             {todo.map((item)=>{
                 return(
                 
                    <Todoitem key={item.id} item={item} onDelete={onDelete}/> 
                 )
             })}
         </div>
     )
 }
 export default TodoInput