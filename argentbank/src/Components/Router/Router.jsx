import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Homepage from '../../Pages/Homepage'
import Login from '../../Pages/Login'
import User from '../../Pages/User'

export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign" element={<Login />} />
        <Route path="/user" element={<User />} />
    </Routes>
  )
}
