import React from 'react'
import { Route,Routes } from 'react-router'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Demo from './Pages/Demo'
import PrivateRoute from './PrivateRoute'


const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/demo' element={
        <PrivateRoute>
            <Demo/>
        </PrivateRoute>
        }/>
      </Routes>
    </div>
  )
}

export default AllRoute