
import { useRef } from 'react'
import './App.css'

function App() {
 const inputref=useRef()
 function chng()
 {
  document.inputref.value="Hello Everyone"
  inputref.current.style.color="red"
  inputref.current.style.fontsize="30px"
  inputref.current.src=""
  inputref.current.height="200"
  inputref.current.width="200"

 }
 function hideele()
 {
  inputref.current.style.display="none"
 }


  return (
    <>
     <h1>UsetRef Hook</h1>
     <img src='./' height={100} width={100} ref={imgref}/>
     <input type='text' ref={inputref}/>
     <button onClick={()=>chng()}>Click here</button>
     <button onClick={()=>hideele()}>Hide</button>
    </>
  )
}

export default App
