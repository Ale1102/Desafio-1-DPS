// ResumenInscripcion.jsx - Muestra materias inscritas y total de unidades

import React from "react";
import './styles/ResumenInscripcion.css'; // Importa el archivo CSS específico

// Componente ResumenInscripcion que recibe las materias inscritas, y las funciones para eliminar y limpiar inscripciones
function ResumenInscripcion({ inscritas, eliminarMateria, limpiarInscripcion }) {
  // Calcula el total de unidades valorativas sumando las unidades de cada materia inscrita
  const totalUnidades = inscritas.reduce((total, materia) => total + materia.unidades, 0);

  return (
    <div className="resumen">
      <h2>Materias Inscritas</h2> {/* Título de la sección */}
      <ul>
        {inscritas.map((materia) => (
          <li key={materia.id}> {/* Cada materia inscrita se renderiza como un elemento de lista */}
            {materia.nombre} - {materia.unidades} UV
            <button onClick={() => eliminarMateria(materia.id)}>Eliminar</button> {/* Botón para eliminar la materia */}
          </li>
        ))}
      </ul>
      <p>Total de Unidades Valorativas: {totalUnidades}</p> {/* Muestra el total de unidades valorativas */}
      <button onClick={limpiarInscripcion}>Limpiar Inscripción</button> {/* Botón para limpiar todas las inscripciones */}
    </div>
  );
}

export default ResumenInscripcion; // Exporta el componente ResumenInscripcion para su uso en otros archivos