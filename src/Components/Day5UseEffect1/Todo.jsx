import React, { useEffect, useState } from 'react'
import styles from './todo.module.css';
import Edit from './Edit'

const Todo = () => {
    const [newTodo,setNewTodo] = useState("");
    
    const [todos ,setTodos] = useState([]);
    const [isEdit,setIsEdit] = useState(false)
const saveInfo =()=>{
    fetch("http://localhost:8080/todos",{
        method : "POST",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify({
            value : newTodo,
            isCompleted : false
        })
    })
        .then((r) => r.json())
        .then((d)=> {
            // console.log(d);
            setTodos([...todos,d])
            setNewTodo("")
        })
}
 const removeTodo = (id)=>{
    let updatedTodo = todos.filter((item)=>item.id!=id);
    setTodos(updatedTodo)
    fetch(`http://localhost:8080/todos/${id}`,{
        method : "DELETE",
        
    })
    
 }
 const handleEdit = (id)=>{
     return(
         <Edit/>
     )

 }
    useEffect(()=>{
        fetch("http://localhost:8080/todos")
        .then((r) => r.json())
        .then((d)=> {
            // console.log(d);
            setTodos(d)
        })
  },[])

  return (
    <div className={styles.cont}> <h2>Todo app</h2>
        <div >
            <input value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
            <button onClick={()=>saveInfo()}>+</button>
            {todos.map((todo)=>{
                return(
                    <div key={todo.id}>{todo.value} 
                    <input type={isEdit ? "text" : "button"} onClick={()=>setIsEdit(!isEdit)}/>
                    <button onClick={()=>removeTodo(todo.id)}>del</button>
                    
                    </div>
                )
            })}
            
        </div>

    </div>
  )
}

export default Todo