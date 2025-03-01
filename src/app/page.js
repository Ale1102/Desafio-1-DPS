// Home.jsx - Componente principal de la aplicación

"use client"; // Indica que este archivo se ejecuta en el cliente
import React, { useState } from "react";
import Header from "@/app/headers"; // Importa el componente Header
import MateriaList from "@/app/MateriaList"; // Importa el componente MateriaList
import ResumenInscripcion from "@/app/ResumenInscripcion"; // Importa el componente ResumenInscripcion
import { materias } from "@/data/data"; // Importa la lista de materias desde el archivo data.js

// Componente principal Home
export default function Home() {
  const [inscritas, setInscritas] = useState([]); // Estado para las materias inscritas

  // Función para inscribir una materia
  const inscribirMateria = (materia) => {
    if (!inscritas.find((m) => m.id === materia.id)) {
      setInscritas([...inscritas, materia]);
    }
  };

  // Función para eliminar una materia inscrita
  const eliminarMateria = (id) => {
    setInscritas(inscritas.filter((m) => m.id !== id));
  };

  // Función para limpiar todas las inscripciones
  const limpiarInscripcion = () => {
    setInscritas([]);
  };

  return (
    <div>
      <Header cantidad={inscritas.length} /> {/* Muestra el componente Header con la cantidad de materias inscritas */}
      <MateriaList materias={materias} inscribirMateria={inscribirMateria} /> {/* Muestra la lista de materias disponibles */}
      <ResumenInscripcion 
        inscritas={inscritas} 
        eliminarMateria={eliminarMateria} 
        limpiarInscripcion={limpiarInscripcion} 
      /> {/* Muestra el resumen de inscripciones */}
    </div>
  );
}