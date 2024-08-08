import React, { useState } from 'react'

function Postmethod() {
    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [city,setCity]=useState("")
    function addstud(e)
    {
        e.preventDefault()
        let stud={name, phone,city}
        console.log(stud)
        fetch("",{
            method:"post",
            headers:{
                'Content-Type':"aplication/json"
            },
            body:JSON.stringify(stud)
        }).then((resp1)=>{
            resp1.json().then((resp2)=>{
                console.log(resp2);
            })
        })
    }
  return (
    <div>
        <h2>Add New Student</h2>
        <form onSubmit={(e)=>addstud(e)}>
        <input type="text"placeholder='Enter your name' value={name}
        onChange={(e)=>setName(e.target.value)} /><br/><br/>

      <input type="text"placeholder='Enter your Phone number' value={phone}
        onChange={(e)=>setPhone(e.target.value)} /><br/><br/>

        <input type="text"placeholder='Enter your city' value={city}
        onChange={(e)=>setCity(e.target.value)} /><br/><br/>
        <button type='submit'>Add student</button>
      </form>
      
    </div>
  )
}

export default Postmethod
