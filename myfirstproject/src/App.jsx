
import './App.css'
import Classcomp from './Classcomp'
import Funcomp from './assets/Funcomp'

function App() {
  let msg="Hello everyone"
  function circle()
  {
    let r=12
     return 3.14*r*r
  }
  let user= {
    id:1,
    name:"Sai",
    email:"sai@gmail.com",
    phone:8600719189
  }


 
  return (
    <>
      <h1>Welcome to React Js World </h1>
      <p><b>This is Paragraph</b></p>
      <p>{msg}</p>
     <h3>Area of circle is : {circle()}</h3>

      <h4>user information Id : {user.id}</h4>
      <h4> Name of user : {user.name}</h4>
      <h4> Email of the user : {user.email}</h4>
      <h4> phone number of the user : {user.phone}</h4>
      <ol>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
        <li>Fourth item</li>
        <li>Fifth item</li>
        <li>Sixth item</li>
      </ol>
      <Funcomp person={user}/>
      <Classcomp msg={msg}/>
    </>
  )
}

export default App
