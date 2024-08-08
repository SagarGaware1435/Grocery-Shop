import React, { useState } from 'react'
import {Form} from 'react-bootstrap';
import Button  from 'react-bootstrap/Button';


function Todoinput(addtask) {
  const [task,setTask]=useState("")
  return (
    <div>
        <div className='d-flex justify-content-evenly gap-3'>
        <Form.Control type="text" placeholder="Enter your task"
         className='w-75 fs-4'value={task} onChange={(e)=>setTask(e.target.value)}/>
            <Button varient="success" className='fs-2 px-3 py-1 rounded-circle' 
            onClick={()=>addtask(task)}> +</Button>

     
        </div>
      
    </div>
  )
}

export default Todoinput
