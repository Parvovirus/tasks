import { Link } from 'react-router-dom'
import './css/home.css'
import portada from './img/taskImg.jpg'

function Home() {
  return (
    <div className="home">
      <div className="Bienvenida">
        <img className="img-port" src={portada}></img>
        <div>
          <p className="text">Bienvenido a Organizador de Tareas</p>

          <p className="text2">Organízate, planifica y guarda las tareas</p>
        </div>
      </div>
      <div className="buttons">
        <button className="login">
          <Link to={'/login'}> Iniciar sesión</Link>
        </button>
        <button className="register">
          <Link to={'/register'}>Crear una cuenta</Link>
        </button>
      </div>
    </div>
  )
}

export default Home
