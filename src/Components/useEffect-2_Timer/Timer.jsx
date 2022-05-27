import React ,{useState ,useEffect} from 'react'

const Timer = () => {
    const [timer ,setTimer] = useState(10);
    useEffect(()=>{
      const id =   setInterval(()=>{
            //stale state 
            if( timer <1){
                clearInterval(id)
            }
            setTimer((prev)=> prev-1)
            // setTimer( timer-1)
      },1000);
      return ()=>{
          clearInterval(id)
      };

    }, [])

  return (
    <div>Timer " {timer}</div>
  )
}

export default Timer