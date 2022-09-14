import React, {useState } from 'react'

function Register() {
  const [nick, setNick] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [pass2, setPass2] = useState('')

  const registrar = () => {
    let newUser = {
      nick,
      email,
      pass,
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newUser }),
    }

    fetch('registro', requestOptions)
      .then((res) => res.json())
      .then((res) => { })

    console.log(nick, email, pass, pass2)
  }
  return (
    <div>
      <div className="form-register">
        <label>NickName</label>
        <input
          type="text"
          placeholder="NickName"
          onChange={(e) => setNick(e.target.value)}
        ></input>
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
        <label>confirmar Password</label>
        <input
          type="password"
          onChange={(e) => setPass2(e.target.value)}
        ></input>

        <input type="button" value="Registrar" onClick={() => registrar()} />
      </div>
    </div>
  )
}

export default Register
