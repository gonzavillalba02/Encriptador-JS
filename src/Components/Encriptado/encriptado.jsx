import React, {useState} from "react";
import "./encriptado.css";
import NoEncontrado from "./No encontrado/no_encontrado";
import Encontrado from "./Encontrado/encontrado";

const Encriptado = ({encriptado}) => {

    return(
        <div className="encriptado" >
            {encriptado.length == 0 ? 
            <NoEncontrado /> 
            : <Encontrado encriptado={encriptado}/>}
        </div>
    )
}

export default Encriptado;