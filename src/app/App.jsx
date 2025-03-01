// App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import MateriaList from './components/MateriaList';
import ResumenInscripcion from './components/ResumenInscripcion';
import { materias } from './data/data';
import './styles/App.css'; // Importa el archivo CSS

const App = () => {
  const [inscritas, setInscritas] = useState([]);

  const inscribirMateria = (materia) => {
    if (!inscritas.some((m) => m.id === materia.id)) {
      setInscritas([...inscritas, materia]);
    }
  };

  const eliminarMateria = (id) => {
    setInscritas(inscritas.filter((materia) => materia.id !== id));
  };

  const limpiarInscripcion = () => {
    setInscritas([]);
  };

  return (
    <div>
      <Header cantidad={inscritas.length} />
      <MateriaList materias={materias} inscribirMateria={inscribirMateria} />
      <ResumenInscripcion
        inscritas={inscritas}
        eliminarMateria={eliminarMateria}
        limpiarInscripcion={limpiarInscripcion}
      />
    </div>
  );
};

export default App;