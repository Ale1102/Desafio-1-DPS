// Header.jsx - Muestra el título y contador de materias inscritas

import React from 'react';
import './styles/App.css'; // Importa el archivo CSS

// Componente Header que recibe la cantidad de materias inscritas como prop
const Header = ({ cantidad }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div>
          <h1>Inscripción a Materias UDB</h1> {/* Título de la aplicación */}
          <p>Total de materias inscritas: {cantidad}</p> {/* Muestra el total de materias inscritas */}
        </div>
        <img src="favicon.ico" alt="Logo" className="header-logo" /> {/* Imagen del logo */}
      </div>
    </header>
  );
};

export default Header; // Exporta el componente Header para su uso en otros archivos