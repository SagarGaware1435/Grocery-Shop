import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './assets/Child'

function App() {
  const [count, setCount] = useState(0)
  const [qty, setQty] = useState(5)
  useEffect(()=>{
    console.log("Component called");
  },[count])

  return (
    <>
      <h1>App Component</h1>
      <h2>Counter: {count}</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <Child qty={qty} setQty={setQty}/>
     
    </>
  )
}

export default App
