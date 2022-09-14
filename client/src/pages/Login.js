import React, {useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')


  const loguear = () => {
    let giveUser = {
      email,
      pass,
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ giveUser }),
    }

    fetch('loguear', requestOptions)
      .then((res) => res.json())
      .then((res) => {})


  }

  return (
    <div>
      <div className="form-register">
        <label>Email</label>
        <input
          type="email"
          placeholder="tareas@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setPass(e.target.value)}
        ></input>
       
        <input type="button" value="Loguear" onClick={() => loguear()} />
      </div>
    </div>
  )
}

export default Login
