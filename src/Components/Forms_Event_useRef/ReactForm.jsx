import React, { useState } from 'react'
import axios from 'axios'
const ReactForm = () => {
    const [form,setForm] = useState({
       username : "",
       age : 0,
       address : "",
       department : "",
       salary : "",
       marital_status :"",

    })
    const handleChange = (e)=>{
       const {name ,value,type, checked,files} = e.target
        if(type=="checkbox"){
            setForm({...form, [name] : checked})
        }
        else if(type==="file"){
            setForm({
                ...form,
                [name] : files,
            });
        }
        else{
            setForm({
                ...form,
                [name] : value,
            })
        }
        
    }
const handleSubmit =  (e)=>{
    e.preventDefault();
    const saveData = async ()=>{
      let res = await  axios.post('http://localhost:8080/data',form)
      let data = res.data;
      console.log(data)
    }
    saveData()
    
}

  return (
    <div><h2>ReactForm</h2>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name :</label>
            <input type="text" value={form.username} name="username" onChange={handleChange}/>
        </div>
        <div>
            <label>Age :</label>
            <input type="number" value={form.age} name="age" onChange={handleChange}/>
        </div>
        <div>
            <label>Address :</label>
            <input type="text" value={form.address} name="address" onChange={handleChange}/>
        </div>
        <select value={form.department} onChange={handleChange}>
            <option value="operation">Operation</option>
            <option value="tech">Tech</option>
            <option value="csbt">CSBT</option>
            <option value="hr">hr</option>
        </select>
        <div>
            <label>salary :</label>
            <input type="number" value={form.salary} name="salary" onChange={handleChange}/>
        </div>
        <div>
            <label>Maritaial Status :</label>git
            <input type="checkbox" />
        </div>

        <button type='submit'>submit</button>
    </form>



    </div>
  )
}

export default ReactForm