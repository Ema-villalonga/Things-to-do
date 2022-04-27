import "./App.css";
import ListaDeTareas from "./componentes/ListaDeTareas";
import Anylogo from "./imagenes/Andy.png";

function App() {
  return (
    <div className="App">
      <div className="Andy-logo-contenedor">
        <img src={Anylogo} className="Andy-logo" />
      </div>

      <div className="tareas-lista-principal">
        <h1>Mi lista de tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
