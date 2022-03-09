import {useState, useEffect} from "react";


const Paciente = ({paciente, setPaciente, deletePaciente}) => {

  
  const {fullName, phoneNumber, tipoCita, fecha, hora, id} = paciente;



  const handleEliminar = () => {
    const respuesta = confirm("¿desea eliminar este paciente?");
     if(respuesta){
       deletePaciente(id);
     }
     
  }

  
  return (
    <div className="bg-sky-300 border-2 border-teal-600 rounded px-3 py-1 text-gray-700 my-2">
      <div className="mb-5 mt-1">
      <p className="leading-3 py-2">
        <span className="font-bold">Nombre y apellidos: </span>{fullName}
      </p>
      <p className="leading-3 py-2 font-se">
        <span className="font-bold">Teléfono: </span>{phoneNumber}
      </p>
      <p className="leading-3 py-2">
        <span className="font-bold">Tipo de cita: </span>{tipoCita}
      </p>
      <p className="leading-3 py-2">
        <span className="font-bold">Hora: </span>{hora} h.
      </p>
      <p className="leading-3 py-2">
        <span className="font-bold">Fecha: </span>{fecha}
      </p>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-3 ">
        <div className="flex flex-col items-center">
        <button type="submit" className="transition ease-in-out text-center text-white tracking-wide font-bold bg-amber-500 border-1 border-amber-600 hover:bg-amber-600 rounded w-full py-1 px-2" onClick={() => setPaciente(paciente)}>Editar</button>
        </div>
        <div className="flex flex-col items-center">
        <button type="submit" className="transition ease-in-out text-center text-white tracking-wide font-bold bg-red-500 border-1 border-red-600 hover:bg-red-600 rounded w-full py-1 px-2" onClick={handleEliminar}>Eliminar</button>
        </div>
        
      </div>
     
    </div>
  );
};

export default Paciente;
