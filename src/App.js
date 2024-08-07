import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Main, Login, Register, Navbar } from './component'
import AuthService from './service/auth'
import { useDispatch } from 'react-redux'
import { signUserFailure, signUserSuccess } from './slice/auth'
import { getItem } from './helpers/storge'
const App = () => {
  const dispatch = useDispatch()

	const getUser = async () => {
		try {
			const response = await AuthService.getUser()
			dispatch(signUserSuccess(response.user))
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		const token = getItem('token')
		if (token) {
			getUser()
		}
	}, [])

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
