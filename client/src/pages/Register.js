import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/register.css'
import btn from './img/angulo-izquierdo.svg'

function Register() {
  const [nick, setNick] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [pass2, setPass2] = useState('')

  const [message, setMessage] = useState('')

  const registrar = () => {
    let newUser = {
      nick,
      email,
      pass,
      pass2,
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newUser }),
    }

    fetch('registro', requestOptions)
      .then((res) => res.json())
      .then((res) => {
        setMessage(res)
        console.log(res)
      })
  }
  return (
    <div className='div-register'>
      <Link to={'/'} className="p-login">
        <img src={btn} className="img-form"></img>
      </Link>
      <div className="form-register">
        <p className="form-title">CREAR CUENTA</p>
        <label>Nick</label>
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

        {message == 'valid' ? (
          <Link to={'/login'} className="p-login">
            {' '}
            Iniciar sesión
          </Link>
        ) : (
          ''
        )}
        {message == 'invalid' ? (
          <p className="p-invalid">Datos no correctos</p>
        ) : (
          ''
        )}
        {message == 'existe' ? (
          <p className="p-exist">Correo existe, usa otro</p>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Register
