import React from "react";
import "./encontrado.css";

const Encontrado = ({handelStep}) => {
    return(
        <div className="encontrado">
            <textarea readOnly value="Hola estoy probando como funciona todo por aca mi nombre es Gonzalo"/>
            <button>Copiar</button>
        </div>
    )
}

export default Encontrado;