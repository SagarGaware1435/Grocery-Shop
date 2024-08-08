import React, { useEffect } from 'react'

function Getmethod() {
    const[data,setData]=usestate([])
    const[name,setName]=usestate()
    const[phone,setPhone]=usestate()
    const[city,setCity]=usestate("")
    const[id,setId]=usestate(null)
    useEffect(()=>{
        fetch("").then((resp1)=>{
            resp1.json().then((resp2)=>{
                console.log(resp2);
                setData(resp2)
                setName(resp2[0].name)
                setPhone(resp2[0].phone)
                setCity(resp2[0].city)
                setId(resp2[0].id)
            })
        })
    },[])
    function selectstud(item)
    {
        console.log(item)
        setName(item.name)
        setPhone(item.phone)
        setCity(item.city)
        setId(item.id)
    }
    function editstud(e)
    {
        e.preventDefault()
        let s= {name,phone,city,id}
        fetch(`http://localhost:3000/students/${s.id}`,{
            method:"put",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(s)
        }),then((resp1)=>{
            resp1.json().then((resp2)=>{
                console.log(resp2)
                getstud()
            })
        })
    }
  return (
    <div>
      <form action="">
      <h2>Update Student Information </h2>
        <form onSubmit={(e)=>addstud(e)}>
        <input type="text"placeholder='Enter your name' value={name}
        onChange={(e)=>setName(e.target.value)} /><br/><br/>

      <input type="text"placeholder='Enter your Phone number' value={phone}
        onChange={(e)=>setPhone(e.target.value)} /><br/><br/>

        <input type="text"placeholder='Enter your city' value={city}
        onChange={(e)=>setCity(e.target.value)} /><br/><br/>
        <button type='submit'>Add student</button>
      </form>
      </form>
    </div>
  )
}

export default Getmethod
