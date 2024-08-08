import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Employee from './assets/Employee'
import Emp from './assets/Emp'
import Login from './assets/Login'
import Formvalid from './assets/Formvalid'
import User from './assets/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     {/* <Emp/> */}

     {/* <Employee/> */}
     {/* <Formvalid/>
     <Login/> */}
     <User/>
    </>
  )
}

export default App
