import React from 'react'

function Child(prop) {
  return (
    <div>
        <h2>Child Component</h2>
        <h3>{prop.qty}</h3>
        <button onClick={()=>prop.setQty(prop.qty*2)}>Change Quantity</button>
      
    </div>
  )
}

export default Child
