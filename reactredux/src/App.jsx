import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h3>Using redux in React Application</h3>
     <h4 className='text-success'>Counterr: {count}</h4>
    </>
  )
}

export default App
