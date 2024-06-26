import React, { useState } from 'react'
import { Input } from '../ui'
import { logo, logtip } from '../constant'

const Register = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <main className="form-signin w-25 m-auto text-center">
        <form>
          <img className="mb-4" src={logo} alt="" width="150" height="100"/>
          <h1 className="h3 mb-3 fw-normal">Please Register</h1>

          <Input label={"UserName"} value={userName} setValue={setUserName} />
          <Input label={"Email"} type={'email'} value={email} setValue={setEmail} />
          <Input label={"Password"} type={"password"} value={password} setValue={setPassword}/>
          <button className="btn btn-primary w-100 py-2 mt-2" type="submit">Register</button>
          <p className="mt-5 mb-3 text-body-secondary">© 2024</p>
        </form>
      </main>
    </div>
  )
}

export default Register