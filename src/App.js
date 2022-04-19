import logo from './logo.svg';
import './App.css';
import {Testimonio} from './componentes/Testimonio.jsx'; // esta es una exportacion nombrada, que este en llaves, significa que solo ese componente de todo el archivo, porque podría tener más componentes

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestras alumnas sobre Hackademy</h1>
        <Testimonio />
      </div>
    </div>
  );
}

export default App;
