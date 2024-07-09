import { Link, useNavigate } from 'react-router-dom'
import { logo } from '../constant'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../helpers/storge'
import { signUserLogout } from '../slice/auth'

const Navbar = () => {
  const {loggedIn, user} = useSelector(state=>state.auth)
  const navigate= useNavigate()
  const dispatch = useDispatch()

  const logOutHandler = () => {
    dispatch(signUserLogout())
    removeItem('token')
    navigate('/login')
  }

  return (
    <div className=''>
        <div className='d-flex  flex-column  flex-md-row align-items-center mb-4 pb-2 pt-2 border-bottom container'>
          <Link to={'/'}>
            <div className=''>
              <img src={logo} width="60px" alt="" />
            </div>
          </Link>
          <nav className='d-inline-flex mt-2 mt-md-0 ms-md-auto' >
            {loggedIn ? (
              <>
                <p className='me-3 py-2 m-0 taxr-dark text-decoretion-none'>
                  {user.username}
                </p>
                <button className="btn btn-outline-danger" onClick={logOutHandler}>Logout</button>
              </>
            ):(
              <>
                  <Link to={'/login'} className='me-3 py-2 text-dark text-decoration-none'>
                    Login
                  </Link>
                  <Link to={'/register'} className='me-3 py-2 text-dark text-decoration-none'>
                    Register
                  </Link>
              </>
            )
            }
          </nav>
        </div>
    </div>
  )
}

export default Navbar