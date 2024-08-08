import React, { useEffect, useState } from 'react'

function useCount() {
    const [count,setCount]=useState(0)
    useEffect(()=>
    {
        document.title=count+"hits on button"
    })
    function add()
    {
        setCount(count+1)
    }
    function sub()
    {
        setCount(count-1)
    }
    function res()
    {
        setCount(0)
    }
    return [count,add,sub,res]
 
}

export default useCount
