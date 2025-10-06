import React from 'react'

  const Print2 = () => {
    const name2 = "Devraj"
    return(
        <div>
            <h1> The name is {name2} </h1>
        </div>
    )
 }
const Print = () => {
  
    const name = "Suraj Vanjare"
    
  return (
    <div>
        <h1>
            The name is {name}
            <Print2 />
            
        </h1>
      
    </div>
  )
}

export default Print
