import { useState, useEffect } from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  const initialState  = JSON.parse(localStorage.getItem('pacientes')) ?? []; // antes de usaba en useEffect para traer esa data de loaclStorage pero en las ultimas versiones de react se usa como unn variable normal y se le pasa al useState para inicializarlo.
  const [pacientes, setPacientes] = useState(initialState )
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  }, [pacientes])
  
  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (

    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario  
        pacientes={pacientes} 
        setPacientes={setPacientes}  
        paciente={paciente}
        setPaciente={setPaciente}/>
        <ListadoPacientes
        pacientes={pacientes} 
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}/>
      </div>
      
    </div>

  )
}

export default App
