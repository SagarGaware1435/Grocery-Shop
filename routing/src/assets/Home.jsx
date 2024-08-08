import React from 'react'

function Home() {
  const navigate=useNavigate()
  function navto(url)
  {
    // let show=false
    // if(show)
    // {
    //   navigate('/About')
    // }
    // else
    // {
    //   navigate('/context')
    // }
    navigate(url)
  }
  return (
    <div>
      <h1>This is Home page here</h1>
      <button onClick={()=>navigate('./About')}>Go to About page </button>
      <button onClick={()=>navigate('./Contact')}>Go to Contact Page </button>
      
    </div>
  )
}

export default Home
