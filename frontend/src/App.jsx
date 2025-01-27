import React from 'react'

import Start from './Pages/Start'
import { Routes,Route } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Captainsignup from './Pages/Captainsignup'
import Captainslogin from './Pages/Captainslogin'

import Home from './pages/home'
import Usercontext from './context/Usercontext'
import { useContext } from 'react'
import { userDataContext } from './context/Usercontext'
import Userprotectedwrapper from './Pages/Userprotectedwrapper'
import { CaptainContext } from './context/Captaincontext'
import Captainshome from './Pages/Captainshome'
import Captainprotectedwrapper from './Pages/Captainprotectedwrapper'
import Riding from './Pages/Riding'
import CaptainsRiding from './Pages/CaptainsRiding'

const App = () => {
  const { name } = useContext(userDataContext);
  const { Akash } = useContext(CaptainContext);
  console.log(name, Akash);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/captainsignup' element={<Captainsignup />} />
        <Route path='/captainlogin' element={<Captainslogin />} />
        <Route path='/home' element={<Userprotectedwrapper><Home /></Userprotectedwrapper>} />
        <Route path='/captains-home'element={<Captainprotectedwrapper><Captainshome></Captainshome></Captainprotectedwrapper>} ></Route>
        <Route path='/captain-riding' element={<CaptainsRiding/>}></Route>
      </Routes>
    </div>
  )
}

export default App

