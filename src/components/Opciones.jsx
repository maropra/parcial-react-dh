import React from "react";

class Opciones extends React.Component {

    render() {
        return (
            <div className="opciones">
                <div className="opcion">
                    <button className="botones" onClick={() => this.props.handleClick("a")} >A</button>
                    <span>{this.props.opcionA}</span>
                </div>
                <div className="opcion">
                    <button className="botones" onClick={() => this.props.handleClick("b")} >B</button>
                    <span>{this.props.opcionB}</span>
                </div>
            </div>
        );
    }
}

export default Opciones;