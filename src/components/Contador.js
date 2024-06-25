

//src / components / Contador.js
import React, { useState } from 'react';
import '../styles/Contador.css'; // Importa los estilos si los hay

function Contador() {
    // Declarar una variable de estado llamada 'count' y una función para actualizarla 'setCount'
    const [count, setCount] = useState(0);

    // Función para manejar el clic en el botón
    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div className="contador">
            <h1>Contador: {count}</h1>
            <button onClick={handleClick}>Incrementar</button>
        </div>
    );
}

export default Contador;
