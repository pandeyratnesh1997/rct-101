import React from "react";
import styles from './navbar.module.css'
const Links = ({url,name})=>{
    // console.log(url);
   return(
       
             <a className={styles.links} href={url}>{name}</a>
      
      
   ) 
}
export default Links;