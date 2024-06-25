import logo from './logo.svg';
import './App.css';
import NuevoComponente from './components/NuevoComponente';
import Contador from './components/Contador';
import Reloj from './components/Reloj';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Reloj/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <NuevoComponente titulo="Hola, Mundo!" descripcion="Este es un nuevo componente en React." />

        <Contador/>

      </header>
    </div>
  );
}

export default App;
