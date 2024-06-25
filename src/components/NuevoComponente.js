// src/components/NuevoComponente.js
import React from 'react';
import '../styles/NuevoComponente.css'; // Importa los estilos si los hay

function NuevoComponente(props) {
  return (
    <div className="nuevo-componente">
      <h1>{props.titulo}</h1>
      <p>{props.descripcion}</p>
    </div>
  );
}

export default NuevoComponente;
