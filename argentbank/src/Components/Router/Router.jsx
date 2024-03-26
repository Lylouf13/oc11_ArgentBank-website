import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Homepage from '../../Pages/Homepage'
import Login from '../../Pages/Login'

export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign" element={<Login />} />
    </Routes>
  )
}
