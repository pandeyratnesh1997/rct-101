import React from "react";
import styles from './navbar.module.css'
const Logo = (props)=>{
    return(
        <div >
            <img className={styles.logo} src={props.logo} alt="logo"/>
        </div>
    )
}
export default Logo;