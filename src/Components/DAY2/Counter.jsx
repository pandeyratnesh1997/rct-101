import React,{useState} from 'react'
import styles from './Counter.module.css'
const Counter = (props) => {
 const [count,setCount] = useState(props.value)
    return (
        <div>
            <h1 className={count%2==0? styles.evnClr : styles.oddClr} >Counter :{count} </h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Increment</button>
            
            <button onClick={()=>setCount(count*2)}>Double</button>
        </div>
    
  )
}

export default Counter