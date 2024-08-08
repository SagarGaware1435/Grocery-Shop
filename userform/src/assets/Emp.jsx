import React from 'react'
import { useState } from 'react'

function Emp() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [addr,setAddr]=useState("")
    const [state,setState]=useState("")
    const [radio1,setRadio1]=useState(false)
    const [radio2,setRadio2]=useState(false)
    const [check1,setCheck1]=useState(false)
    const [check2,setCheck2]=useState(false)
    const [check3,setCheck3]=useState(false)
    const [check4,setCheck4]=useState(false)

    function getuser(e) 
    {
        e.preventDefault()
        let emp={name,email,phone,addr,state,radio1,radio2,check1,check2,check3,check4}
        console.log(emp);
    }
    
  return (
    <div>
      <h1>Employee Form</h1>
      <form onSubmit={(e).getuser(e)}>
        <input type='text' placeholder='Enter your Name'
         value={name} onChange={(e)=>setName(e.target.value)}/>
         <br/> <br/>
        <input type='email' placeholder='Enter email address'
        value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br/><br/>
        <input type='text' placeholder='Enter your mobile'
        value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        <br/><br/>
        <textarea rows={5} cols={25} color='aqua' placeholder='Enter your address'
        value={addr} onChange={(e)=>setAddr(e.target.value)}></textarea>
        <br/><br/>
        <label>Select State:</label>
        <select value={state} onChange={(e)=>setState(e.target.value)}>
            <option>Maharashtra</option>
            <option>Punjab</option>
            <option>Gujarat</option>
            <option>Rajasthan</option>
        </select><br/><br/>
        <label>Gender:</label>
        <input type="radio" name='r1'value={radio1} onChange={(e)=>setRadio1(e.target.value)} />Male
        <input type="radio" name='r1' value={radio2} onChange={(e)=>setRadio2(e.target.value)} />Female <br/><br/>
        <label>Hobbies:</label>
        <input type='checkbox' value={check1} onChange={(e)=>setCheck1(!check1)} />reading
        <input type='checkbox' value={check2} onChange={(e)=>setCheck2(!check2)}/>Playing
        <input type='checkbox' value={check3} onChange={(e)=>setCheck3(!check3)}/>Listening music
        <input type='checkbox' value={check4} onChange={(e)=>setCheck4(!check4)}/>Dancing<br/><br/>
        <input type="submit" value="Submit"  />
        <input type="reset" value="Reset"/>
      </form>
    </div>
  )
}

export default Emp