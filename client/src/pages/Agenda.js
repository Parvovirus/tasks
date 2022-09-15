import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import userContext from "../context/userContext";


function Agenda() {

  const usuario = useContext(userContext)
  console.log(usuario)


  return (
    <div className="div-agenda">
      <h2>Agenda</h2>
      <p>{usuario}</p>
    </div>
  )
}

export default Agenda
