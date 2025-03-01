// App.js - Componente principal

import React, { useState } from "react";
import Header from "./Header"; // Importa el componente Header
import MateriaList from "./MateriaList"; // Importa el componente MateriaList
import ResumenInscripcion from "./ResumenInscripcion"; // Importa el componente ResumenInscripcion
import { materias } from "./data"; // Importa la lista de materias desde el archivo data.js
import './styles/App.css'; // Importa el archivo CSS

// Componente principal App
function App() {
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

export default App; // Exporta el componente App para su uso en otros archivos