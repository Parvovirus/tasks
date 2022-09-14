
import { Link } from 'react-router-dom'

function Home() {
    return (
      <div >
       <div className='Bienvenida'>
        <p className="text">Bienvenido a Organizador de Tareas</p>
        

        <p className="text2">Organízate, planifica y guarda las tareas</p>

      </div>
      <div className='buttons'>
        <button className='login'><Link to={"/login"} > Iniciar sesión</Link></button>
        <button className='register'><Link to={"/register"} >Crear una cuenta</Link></button>
      </div>
      </div>
    );
  }
  
  export default Home;
  