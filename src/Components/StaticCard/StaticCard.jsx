import React from 'react'
import Mobile from './Mobile'
const StaticCard = () => {
    const mobile = [
        {name : "Samaung"},
        {name : "HTC"},
        {name : "Micromax"},
        {name : "Apple"},
    ]
const operating = [
    {name : "Android" },
    {name : "Blackbery" },
    {name : "iPhone" },
    {name : "Windows Phone" },
]
  return (
    <div>
        <h1>Moblie Operating System</h1>
        {operating.map((el)=>{
            return(
                
                    
                    <div key={el.name}>
                        <Mobile {...el}/>
                    </div>
                
               
               
            )
        })}

        <h1>Mobile Manufacturers</h1>
        {mobile.map((el)=>{
            return(
                
                    
                    <div key={el.name}>
                        <Mobile {...el}/>
                    </div>
                
               
               
            )
        })}
    </div>
  )
}

export default StaticCard