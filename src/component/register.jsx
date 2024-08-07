import React, { useEffect, useState } from 'react'
import { Input } from '../ui'
import { logo } from '../constant'
import { useDispatch, useSelector } from 'react-redux'
import {signUserFailure, signUserStart, signUserSuccess} from '../slice/auth'
import AuthService from '../service/auth'
import ValidationError from './validation-error'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const {isLoading,loggedIn} = useSelector(state=>state.auth);
  
  const registerHandler = async e => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = {
      username,
      email,
      password,
    }
    try{
      const response= await AuthService.register(user)
      dispatch(signUserSuccess(
        response.user
      ))
    navigate('/') 
  ;
    }catch(e){
      dispatch(signUserFailure(
        e.response.data.errors
      ))
    }
  }
  
  useEffect(() => {
    if(loggedIn){
      navigate('/')
    }
  },[loggedIn]);

  return (
    <div>
      <main className="form-signin w-25 m-auto text-center">
        <form>
          <img className="mb-4" src={logo} alt="" width="150" height="100"/>
          <h1 className="h3 mb-3 fw-normal">Please Register</h1>
          <ValidationError/>
          <Input label={"UserName"} value={username} setValue={setUserName} />
          <Input label={"Email"} type={'email'} value={email} setValue={setEmail} />
          <Input label={"Password"} type={"password"} value={password} setValue={setPassword}/>
          <button 
            className="btn btn-primary w-100 py-2 mt-2" 
            type="submit"
            disabled={isLoading}
            onClick={registerHandler} >
              {isLoading? 'Loading...' : 'Register'}
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2024</p>
        </form>
      </main>
    </div>
  )
}

export default Register