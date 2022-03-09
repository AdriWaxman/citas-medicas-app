import {useState, useEffect} from 'react';
import horasCita from "../data/horasCita";
import Error from "./Error";



function Form({pacientes, setPacientes, paciente, setPaciente}) {
 //Udpate input date with actual date

 
  //const actualDate = `${day}/${month}/${year}`;

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36);

    return random + date;
  };

  const [cita, setCita] = useState({
    fullName: "",
    phoneNumber: "",
    tipoCita: "",
    fecha: "",
    hora: "",
    id: null
  });

  const [error, setError] = useState({
    state: false,
    msg: ""
  });
  
  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setCita(paciente);
    } 
  }, [paciente])

  const handleChange = e => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
      
    });
  };

  const {fullName, phoneNumber, tipoCita, fecha, hora, id} = cita;

  const handleSubmit = e => {
    e.preventDefault();
    

    //Validate form
    if([fullName, phoneNumber, tipoCita, fecha, hora].includes('')){
      setError({
        state: true,
        msg: "Todos los campos son obligatorios"
      });
      return;
    }

    if(phoneNumber.length != 9){
      setError({
        state: true,
        msg: "El teléfono debe tener 9 dígitos"
      });
      return;
    }

  
    //Si todo ok
    setError({
      state: false,
      msg: ""
    });

    //Edicion de pacientes

    if(paciente.id){
      //Editar la cita
        cita.id = paciente.id;
        setPacientes(pacientes.map(paciente => paciente.id === cita.id ? cita : paciente));
        setPaciente({});
    } else {
      //Agregar la cita
      cita.id = generarId();
      setPacientes([...pacientes, cita]);
    }

    
    //Reset form
    setCita({
      fullName: "",
      phoneNumber: "",
      tipoCita: "",
      fecha: "",
      hora: "",
    });

  };


  return ( 
    <div className="bg-green-300 px-2 py-3 rounded shadow-lg shadow-green-400/50 h-2/3">
      <h3 className="text-2xl font-black text-gray-700 text-center">Cita</h3>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center mb-6">
          
          <div className="w-96 mb-3">
            <label className="block text-gray-600 font-bold text-left mb-1.5 pr-4" htmlFor="fullName">
              Nombre y apellidos
            </label>
            <input
              className="bg-white appearance-none border-2 border-white rounded w-full py-1 px-3 text-gray-800 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-purple-500"
              id="fullName"
              type="text"
              name="fullName"
              placeholder="Nombre y apellidos"
              value={fullName}
              onChange={handleChange}
              
            />
          </div>
          <div className="w-96 mb-3">
            <label className="block text-gray-600 font-bold text-left mb-1.5 pr-4" htmlFor="phoneNumber">
              Teléfono
            </label>
            <input
              className="bg-white appearance-none border-2 border-white rounded w-full py-1 px-3 text-gray-800 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-purple-500"
              id="phoneNumber"
              type="phone"
              name="phoneNumber"
              placeholder="Teléfono"
              value={phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className="w-96 mb-3">
            <label className="block text-gray-600 font-bold text-left mb-1.5 pr-4" htmlFor="tipoCita">
              Tipo de cita:
            </label>
            <select
              className="bg-white border-2 border-white rounded w-full py-1 px-3 text-gray-800 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-purple-500"
              id="tipoCita" name="tipoCita" value={tipoCita} onChange={handleChange}
            >
              <option>Selecciona...</option>
              <option value="Consulta médico">Consulta médico</option>
              <option value="Enfermería">Enfermería</option>
              <option value="Vacuna Covid-19">Vacuna Covid-19</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3 w-96 mb-6">
          <div>
            <label className="block text-gray-600 font-bold text-left mb-1.5 pr-4" htmlFor="horaCita">
              Hora cita:
            </label>
            <select
              className="bg-white border-2 border-white rounded w-full py-1 px-3 text-gray-800 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-purple-500"
              id="horaCita" name="hora" value={hora} onChange={handleChange}
            >
              <option>Selecciona...</option>
              {horasCita.map((horaCita) => (
                
                <option key={horaCita.id} value={horaCita.hora}>
                  {horaCita.hora}
                </option>
              ))}
            </select>
            </div>
            <div>
            <label className="block text-gray-600 font-bold text-left mb-1.5 pr-4" htmlFor="fechaCita">
              Fecha:
            </label>
            <input
              className="bg-white border-2 border-white rounded w-full py-1 px-3 text-gray-800 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-purple-500"
              id="fecha" name="fecha"
              type="date" value={fecha} onChange={handleChange}
            />
      
            </div>
          </div>
          <div className="w-96 mb-3">
            <button id="submitBtn" type="submit" className="transition ease-in-out text-center text-white uppercase tracking-wide font-bold bg-amber-500 border-1 border-amber-600 hover:bg-amber-600 rounded w-full py-2 px-4">{(paciente.id ? "Editar cita": "Pedir Cita")}</button>
          </div>
          {error.state ? (<Error error={error}/>) : null}
          
        </div>
        
      </form>
    </div>
   );
}




export default Form;