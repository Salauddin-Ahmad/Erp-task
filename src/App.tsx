import { Route, Routes } from 'react-router'
import Home from './layouts/Home'
import Login from './components/Login'
import Register from './Register'

function App() {

  return (
    <>
  <Routes>
    <Route path='/' element={<Home/>}/> 
    <Route path='/login' element={<Login />}/>
    <Route path='/register' element={<Register />}/>
  </Routes>
    </>
  )
}

export default App
