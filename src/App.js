import React from "react";
import Historia from "./components/Historia";
import Opciones from "./components/Opciones";
import Recordatorio from "./components/Recordatorio";

import data from "./components/data.json";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 1,
      letra: '',
      eleccionPrevia: '',
      historial: []
    }
  }

  handleClick = (btnElegido) => {
    if (this.state.id === 5) {
      alert("Fin!")
    } else {
      this.setState((state) => ({
        id: state.id + 1,
        letra: btnElegido,
        eleccionPrevia: btnElegido,
        historial: [...state.historial, btnElegido]
      }))
    }

  }

  render() {
    const historiaElegida = data.find((historia) => historia.id == this.state.id + this.state.letra)

    return (
      <div className="layout">
        <Historia historia={historiaElegida.historia} />
        <Opciones opcionA={historiaElegida.opciones.a} opcionB={historiaElegida.opciones.b} handleClick={this.handleClick} />
        <Recordatorio opcionPrevia={this.state.eleccionPrevia} opcionesPrevias={this.state.historial} />
      </div>
    );
  }
}

export default App;
