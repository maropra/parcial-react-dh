import React from "react";

class Recordatorio extends React.Component {
    render() {
        return (
            <div className="recordatorio">
                <p>Selección anterior: {this.props.opcionPrevia}</p>
                <p>Historial de opciones elegidas:</p>
                <ul className="recordatorio-opciones">
                    {this.props.opcionesPrevias.map((opcion, index) => {
                        return <li key={index}>{opcion}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Recordatorio;