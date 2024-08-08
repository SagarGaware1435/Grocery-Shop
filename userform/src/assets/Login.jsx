import React, { useState } from 'react'

function Login() {
    const [umane,setUname]=useState("")
    const [pass, setPass]=useState("")
    const [uerror,setUerror]=useState(false)
    const [perror,setPerror]=useState(false)
    function handleuname(e)
    {
        let u=e.target.value
        if (u.length==0)
             {
                setUerror(true)
              }
              else if(u.length<4 || u.length>8)
              {
                setUerror(true)
              }
              else{
                setUerror(false)
               
              }
              setUname(u)
    }
function handlename(e)
{
    let p=e.target.value
    if(p.length==0)
    {
setPerror(true)
    }
    else if(p.length<8 || p.length>12)
    {
        setPerror(true)
    }
    else{
      setPerror(false)
     
    }
    setPass(p) }
}
    function userlogin(e)
    {
        e.preventdefault()
        {
            if(uerror)
            {
                alert("Please enter correct Username")
            }
            else if(perror)
            {
                alert("Please enter correct password")
            }
            else{
                alert("Login Successfull")
            }
        }
    

  return (
    <div>
        <form onSubmit={(e)=>userlogin(e)}>
            <label>Username: </label>
            <input type='text' value={uname} onChange={(e)=>handleuname(e)} /><br/><br/>
            <label>Password:</label>
            <input type='password' value={pass} onChange={(e)=>handlepname(e)} /><br/><br/>
            <button type='submit'>LOGIN</button>
        </form>
        
 

<i class="fa-solid fa-truck-moving"></i>
   
    </div>
  )
}


export default Login
