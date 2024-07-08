import React, { useState } from 'react'
import { Input } from '../ui'
import { logo } from '../constant'
import { useSelector, useDispatch } from 'react-redux';
import {signUserFailure, signUserStart, signUserSuccess} from '../slice/auth'
import AuthService from '../service/auth';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const {isLoading} = useSelector(state=>state.auth);
  // console.log(isLoading);
  const loginHandler = async e => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = {
      email,
      password
    }
    try{
      const response= await AuthService.login(user)
      dispatch(signUserSuccess(
        response.user
      ));
    }catch(e){
      dispatch(signUserFailure(
        e.response.data.errors
      ))
    }
  }
  

  return (
    <div>
      <main className="form-signin w-25 m-auto text-center">
        <form>
        <img className="mb-4" src={logo} alt="" width="150" height="100"/>
          <h1 className="h3 mb-3 fw-normal">Please Login</h1>

          <Input label={"Email"} type={'email'} value={email} setValue={setEmail} />
          <Input label={"Password"} type={"password"} value={password} setValue={setPassword}/>

          <button 
            className="btn btn-primary w-100 py-2 mt-2" 
            type="submit"
            disabled={isLoading}
            onClick={loginHandler} >
              {isLoading? 'Loading...' : 'Login'}
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2024</p>
        </form>
      </main>
    </div>
  )
}

export default Login