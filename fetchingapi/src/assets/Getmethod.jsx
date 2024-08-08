/*import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Getmethod() {
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/students").then((resp1)=>{
            resp1.json().then((resp2)=>{
                console.log(resp2)
                setData(resp2)

            })
        })
    },[])
  return (
    <div>
        <table border={2}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PHONE MUMBER</th>
                    <th>CITY</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.city}</td>

                            </tr>
                        )
                    })
                }
            </tbody>

        </table>
      
    </div>
  )
}

export default Getmethod*/

import React, { useEffect } from 'react'
import { useState } from 'react'

function Getmethod() {
    const [data,setData]=useState([])
    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [city,setCity]=useState("")
    const [id, setId]=useState(null)
    useEffect(()=>{
       getstud()
    },[])
    function getstud()
    {
        fetch("http://localhost:3000/students").then((resp1)=>{
            resp1.json().then((resp2)=>{
                console.log(resp2)
                setData(resp2)
                setName(resp2[0].name)
                setPhone(resp2[0].phone)
                setCity(resp2[0].city)
                setId(resp2[0].id)
            })
        })
    }
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
        let s={name,phone,city,id}
        fetch(`http://localhost:3000/students/${s.id}`,{
            method:"put",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(s)
        }).then((resp1)=>{
            resp1.json().then((resp2)=>{
                console.log(resp2)
                getstud()
            })
        })
    }
        function delstud(id)
        {
            fetch(`http://localhost:3000/students/${id}`,{
                method:"delete"
            }).then((resp1)=>{
                resp1.json().then((resp2)=>{
                    console.log(resp2)
                    getstud()
                })
            })
            
        }
    
  return (
    <div>
        <table border={2}>
            <thead>
                <tr><th>ID</th><th>NAME</th><th>PHONE NUMBER</th><th>CITY</th><th colSpan={2}>UPDATE</th></tr>
            </thead>
            <tbody>
                {
                    data.map((item,index)=>{
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.city}</td>
                                <td><button onClick={()=>selectstud(item)}>Edit</button></td>
                                <td><button onClick={()=>delstud(item.id)}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <h2>Update Student Information</h2>
        <form onSubmit={(e)=>editstud(e)}>
            <input type='text' placeholder='Enter your name' value={name} 
            onChange={(e)=>setName(e.target.value)}/><br/><br/>
            <input type='text' placeholder='Enter Phone Number' value={phone} 
            onChange={(e)=>setPhone(e.target.value)}/><br/><br/>
            <input type='text' placeholder='Enter your city' value={city} 
            onChange={(e)=>setCity(e.target.value)}/><br/><br/>
            <button type='submit'>Edit Student</button>
        </form>
    </div>
  )
}

export default Getmethod
