import React, { useState } from 'react'
import useCount from './useCount'

function Counter() {
    const [count,add,sub,res]=useCount(0)
  return (
    <div>
        <h4>{count}</h4>
        <button onClick={add}>Increment</button>
        <button onClick={sub}>Decrement</button>
        <button onClick={res}>Reset</button>
      
    </div>
  )
}

export default Counter
