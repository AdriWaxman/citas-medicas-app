import { useState, useEffect } from "react";
import Paciente from "./Paciente";

function ListaCitas({pacientes, setPaciente, deletePaciente}) {


  return (
    <div className=" sm:mt-6 md:mt-0  py-1 px-3">
      <div className="border-double border-b-8 border-indigo-600 mb-4 ">
        <h3 className=" text-center text-xl font-bold pb-2">Lista de Citas</h3>
      </div>
      <div className="overflow-y-scroll h-screen">
      {pacientes && pacientes.length ? (
        pacientes.map(paciente => (
          <Paciente
            key={paciente.id}
            paciente= {paciente}
            setPaciente={setPaciente}
            deletePaciente={deletePaciente}
          />
        )
        )
      ) : (
        <div className="bg-orange-600 rounded px-3 py-2 text-white text-center">
          Sin pacientes disponibles
        </div>
      )
        
        
      }
      </div>
     
    </div>
  );
}

export default ListaCitas;

