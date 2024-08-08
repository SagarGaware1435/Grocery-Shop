
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import Todoinput from './assets/Todoinput';
import Tododisplay from './assets/Tododisplay';

function App() {
  const [todolist,setTodolist]=useState([])
  function addtask(task)
  {
    setTodolist([...todolist,task])
    console.log(todolist );

  }
 

  return (
    <>
    <Todoinput addtask={addtask}/>
     {
      todolist.map((item,index)=>{
        
    
        return(
          <Tododisplay key={index} item={item}/>
        )
      })
      
     }
    </>
  )
}

export default App
