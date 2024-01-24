import React from "react";
import logo from "../../Assets/Logo.png";
import exclamacion from "../../Assets/exclamacion.svg";
import './desencriptado.css';

const Desencriptado = ({setText, text, encriptarboton,desencriptarboton}) => {

    const changeText = (texto) => {
        setText(texto);
    }

    return(
        <div className="desencriptado">
            <img className="desencriptado-logo" src={logo} alt='Logo alura latam'/>
            <div className="desencriptado-contenido">
                <textarea 
                type="text" 
                className='desencriptado-area' 
                placeholder="Ingrese texto aquí"
                value={text}
                onChange={(e) => changeText(e.target.value)}
                />
                <div className="desencriptado-aviso">
                    <img src={exclamacion}/>
                    <p>Solo letras minúsculas y sin acentos</p>
                </div>
                <div className="desencriptado-botones">
                    <button 
                    className="desencriptado-botones-encriptar" 
                    onClick={() => encriptarboton(text)}
                    >
                        Encriptar
                    </button>
                    <button 
                    className="desencriptado-botones-desencriptar"
                    onClick={() => desencriptarboton(text)}
                    >
                        Desencriptar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Desencriptado;