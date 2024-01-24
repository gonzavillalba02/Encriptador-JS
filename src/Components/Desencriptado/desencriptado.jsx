import React from "react";
import logo from "../../Assets/Logo.png";
import exclamacion from "../../Assets/exclamacion.svg";
import './desencriptado.css';

const Desencriptado = () => {
    return(
        <div className="desencriptado">
            <img className="desencriptado-logo" src={logo} alt='Logo alura latam'/>
            <div className="desencriptado-contenido">
                <textarea type="text" className='desencriptado-area' placeholder="Ingrese texto aquí"/>
                <div className="desencriptado-aviso">
                    <img src={exclamacion}/>
                    <p>Solo letras minúsculas y sin acentos</p>
                </div>
                <div className="desencriptado-botones">
                    <button className="desencriptado-botones-encriptar">
                        Encriptar
                    </button>
                    <button className="desencriptado-botones-desencriptar">
                        Desencriptar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Desencriptado;