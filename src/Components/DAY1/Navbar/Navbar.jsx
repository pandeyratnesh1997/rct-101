import React  from "react";
import styles from './navbar.module.css'
import Logo from "./Logo";
import Links from "./Links";
import Contact from "./Contact";

const Navbar = ()=>{
    let link = [
        {url : "https://services.com", name : "Services"},
        {url : "https://en.wikipedia.org/wiki/Project",name : "Projects"},
        {url : "https://about.com", name : "About"},
    ]
    return(
        <div className={styles.navbar}>
            <Logo logo={"https://imgs.search.brave.com/F_FL06izIkNXehRBlKke3Zb1exstxgwllqUrYnBPMgw/rs:fit:1207:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/NnNlZkUwU1huNTR5/NHpTeW9zanVRSGFD/NiZwaWQ9QXBp"}/>
            <div className={styles.linkDiv}>
            {link.map((el)=>{
                return(
                <div key={el.name} >
                    <Links {...el}/>
                </div>
                )
            })}
            </div>
            
            <div className={styles.btndiv}>
            <Contact/>
            </div>
            
        </div>
    )
}
export {Navbar};