import {useState, useEffect} from 'react'
import Header from './components/Header'
import Form from './components/Form'
import ListaCitas from './components/ListaCitas'

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const pacientesLocalStorage = localStorage.getItem('pacientes') ?? [];
    if (pacientesLocalStorage) {
      setPacientes(JSON.parse(pacientesLocalStorage));
    }
  }, []);

  //LocalStorage
  useEffect(() => {
      localStorage.setItem('pacientes', JSON.stringify(pacientes));    
    
  }, [pacientes]);

  const deletePaciente = id => {
    setPacientes(pacientes.filter(paciente => paciente.id !== id));
  };



  return (
   <div className=" mx-auto">
    <Header />
    <div className="container h-screen mx-auto mt-20 md:flex md:flex-col lg:grid lg:grid-cols-2 lg:gap-12 xl:grid xl:grid-cols-2 xl:gap-10 2xl:grid">
      <Form 
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
      />
      <ListaCitas 
        pacientes={pacientes}
        setPaciente={setPaciente}
        deletePaciente={deletePaciente}
        
      />
      </div>
   </div>
  )
}

export default App
