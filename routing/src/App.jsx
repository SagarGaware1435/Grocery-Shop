import './App.css'
import {Link,BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './assets/Home'
import Courses from './assets/Courses'
import About from './assets/About'
import Signin from './assets/Signin'
import Signup from './assets/Signup'
import Signout from './assets/Signout'
import Contact from './assets/Contact'

function App() {
 
let user=true
  return (
    <>
    <BrowserRouter>
    <Link to='/'>Home</Link>
    <Link to='/courses'>Courses</Link>
    <Link to='/about'>About us</Link>
    <Link to='/contact'>Contact</Link>
    {!user?<Link to='/signout'>Sign Out</Link>:
   <> <Link to='/signup'>Sign Up</Link>
    <Link to='/signin'>Sign In</Link>
    </>}

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Courses' element={<Courses/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Signout' element={<Signout/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
