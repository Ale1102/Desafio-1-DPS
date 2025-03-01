// MateriaList.jsx - Muestra la lista de materias disponibles y permite inscribir materias

import React from "react";
import { materias } from '@/data/data'; // Importa la lista de materias desde el archivo data.js

// Componente MateriaList que recibe las materias y la función inscribirMateria como props
function MateriaList({ materias, inscribirMateria }) {
  return (
    <div>
      <h2>Materias Disponibles</h2> {/* Título de la sección */}
      <ul>
        {materias.map((materia) => (
          <li key={materia.id}> {/* Cada materia se renderiza como un elemento de lista */}
            <strong>{materia.nombre}</strong> - {materia.descripcion} ({materia.horario}) - {materia.profesor}
            <button onClick={() => inscribirMateria(materia)}>Inscribir</button> {/* Botón para inscribir la materia */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MateriaList; // Exporta el componente MateriaList para su uso en otros archivos