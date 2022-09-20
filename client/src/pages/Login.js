import React, { useState, useEffect, useContext } from 'react'
import './css/login.css'
import { Link, useNavigate } from 'react-router-dom'
import userContext from "../context/userContext";

function Login() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const [message, setMessage] = useState('')
  const navigate = useNavigate();
  // const { usuario, setUsuario } = useContext(userContext)
 

  useEffect(() => {
   
    if (message.message == 'valid') {
      //Te lleva a la agenda.js
     
      console.log('valido')
      // title.setUsuario(message)
      navigate("/agenda")

    }
  }, [message])

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
      .then((res) => {
        setMessage(res)
        console.log(res)
        //setUsuario("mihai")
        

      })
  }

  return (

    
    <div className="div-login">
      {message ? setUsuario(message.usuario.nick): ""}
      <div className="form-login">
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
