import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './showdata.module.css'
const ShowData = ({showdata,setShowdata}) => {
console.log(showdata)
// useEffect(()=>{
//   setShowdata(setShowdata)
// },[])
    // console.log(props)
  return (
    <div>
    
          <table className={styles.table}>
            <thead>
              <tr style={{border :"5px"}}>
                <td className={styles.heading}>Sl.no</td>
                <td className={styles.heading}>Name</td>
                <td className={styles.heading}>Age</td>
                <td className={styles.heading}>Address</td>
                <td className={styles.heading}>Department</td>
                <td className={styles.heading}>Salary</td>
                <td className={styles.heading}>Marital Status</td>
              </tr>
            </thead>
            <tbody>
            {showdata.map((el)=>{
        return(
              <tr key={el.id} className={styles.border}>
                <td>{el.id}</td>
                <td>{el.username}</td>
                <td>{el.age}</td>
                <td>{el.address}</td>
                <td>{el.department}</td>
                <td>{el.salary}</td>
                <td>{el.maritalStatus ? "Married" : "Unmarried"}</td>
              </tr>
          )
        })}
            </tbody>
          </table>
     
    </div>
    
  )
}

export default ShowData