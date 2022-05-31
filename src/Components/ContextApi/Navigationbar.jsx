import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import styles from './navigationbar.module.css'

const Navigationbar = () => {
    const {isAuth, login, logout} = useContext(AuthContext)
  return (
    <div className={styles.navDiv}>
        <button onClick={()=>{
            if(isAuth){
                logout()
            }
            else{
                login("u","p")
            }
        }}>
            
            {isAuth ? "Logout" : "Login"}</button>
        

    </div>
  )
}

export default Navigationbar