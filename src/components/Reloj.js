// src/components/Reloj.js
import React, { useState, useEffect } from 'react';
import '../styles/Reloj.css'; // Importa los estilos si los hay

function Reloj() {
  // Declarar una variable de estado llamada 'fecha' y una función para actualizarla 'setFecha'
  const [fecha, setFecha] = useState(new Date());

  // useEffect para actualizar la fecha cada segundo
  useEffect(() => {
    const intervalId = setInterval(() => {
      setFecha(new Date());
    }, 1000);

    // Cleanup del intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="reloj">
      <h1>Fecha</h1>
      <p>{fecha.toLocaleDateString()}</p>
      <h1>Hora Actual</h1>
      <p>{fecha.toLocaleTimeString()}</p>

    </div>
  );
}

export default Reloj;
