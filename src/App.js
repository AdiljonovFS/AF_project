import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Main, Login, Register, Navbar } from './component'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
    
  )
}

export default App
