// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/data/App'; // Importa el componente principal
import './styles/App.css' // Importa el archivo CSS

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);