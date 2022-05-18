import React from 'react'
import styles from './paymentCard.module.css'
import CardTemplet from './CardTemplet'
const PaymentCard = () => {
 let data = [
     {
        date : "28/10/2020" ,
        logo : "https://imgs.search.brave.com/hN5MQR3hTXvHy-xcNawsro33E-PdGDPQV9QGXbWuTO0/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4y/V2lxb25GbEhpQkVi/VGNLTWFIUUlnSGFI/YSZwaWQ9QXBp",
        heading : "Amazon Gift",
        subheading : "Pay",
        device : "Desktop - Mobile",
        bgcolor : "orange",
        id : Date.now()
    
    },
    {
        date : "17 Sep 2020",
        logo : "https://imgs.search.brave.com/PtQt-ia5tuK7Ami4z-L8Vu0-KnNrwggpFl04d0Q_3hI/rs:fit:407:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/V1NQZ2hqenZmVVlm/UXBxWGJvMzd3SGFJ/byZwaWQ9QXBp",
        heading : "Apple Gift",
        subheading : "Payment",
        device : "MacOs - Mobile",
         bgcolor : "rgb(244,244,245)",
         id : Date.now()

    }

 ]
    return (
    <div >
        {data.map((el)=>{
            return(
                <div key={el.id}>
                    <CardTemplet {...el}/>
                </div>
            )
        })}
        
    </div>
  )
}

export default PaymentCard


