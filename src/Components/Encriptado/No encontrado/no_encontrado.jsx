import React from "react";
import "./no_encontrado.css";
import munieco from "../../../Assets/Muñeco.png";

const NoEncontrado = () => {
 return(
    <div className="no-encontrado">
        <img src={munieco} alt="Muñeco" />
        <p className="no-encontrado-ningun">Ningún mensaje fue encontrado</p>
        <p className="no-encontrado-ingresa">Ingresa el texto que desees encriptar o desencriptar</p>
    </div>
 )
}

export default NoEncontrado;