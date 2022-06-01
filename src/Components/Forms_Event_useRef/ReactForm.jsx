import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ShowData from './ShowData'
const ReactForm = () => {
    const [form,setForm] = useState({
       username : "",
       age : 0,
       address : "",
       department : "",
       salary : "",
       

    })
    const [showdata,setShowdata] = useState([])
    
    const handleChange = (e)=>{
        console.log(e)
       const {name ,value,type, checked} = e.target
        if(type=="checkbox"){
            setForm({...form, [name] : checked})
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
    //   let data = res.data;
    //   console.log(data)
        let response = axios.get('http://localhost:8080/data');
        let data = response.json();
        // setShowdata(data);
    }
    saveData();
    fetchData()
  
}
const fetchData  = async()=>{
    let res = await axios.get('http://localhost:8080/data');
    let data = res.data;
    setShowdata(data)
    console.log(data)
}
useEffect(()=>{
    
    
  fetchData()
  },[])
    console.log(showdata)


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
        <select value={form.department} name="department" onChange={handleChange}>
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
            <label>Marital Status :</label>
            <input type="checkbox" name='maritalStatus' value={form.maritalStatus} onChange={handleChange}/>
        </div>

        <button type='submit'>submit</button>
    </form>
    <ShowData showdata={showdata} setShowdata={setShowdata}/>

    </div>
  )
}

export default ReactForm