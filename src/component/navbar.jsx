import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../constant'

const Navbar = () => {
  return (
    <div className=''>
        <div className='d-flex  flex-column  flex-md-row align-items-center mb-4 pb-2 pt-2 border-bottom container'>
          <Link to={'/'}>
            <div className=''>
              <img src={logo} width="60px" alt="" />
            </div>
          </Link>
          <nav className='d-inline-flex mt-2 mt-md-0 ms-md-auto' >
            <Link to={'/login'} className='me-3 py-2 text-dark text-decoration-none'>
              Login
            </Link>
            <Link to={'/register'} className='me-3 py-2 text-dark text-decoration-none'>
              Register
            </Link>
            
          </nav>
        </div>
    </div>
  )
}

export default Navbar