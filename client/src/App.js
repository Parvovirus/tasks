import Main from './components/Main'
import { BrowserRouter } from 'react-router-dom';
import userContext from "./context/userContext";
import React, { useState, useContext } from "react"

function App() {

  const {usuario, setUsuario } = useState("JORGE")
 

  return (
    <div className="App">
      <userContext.Provider value={"JORGE"}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  )
}

export default App
