import { useState } from "react";
import "./App.css";
import Boton from "./components/Button";
import Contador from "./components/Contador";
import freeCodeCamp from "./img/freeCodeCamp-logo.png";

function App() {
  const [numClics, setNumClics] = useState(0); // 0 -> Valor inicial

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };
  const reiniciarContador = () => {
    setNumClics(21);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCamp}
          alt="Logo de FreeCodeCamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
