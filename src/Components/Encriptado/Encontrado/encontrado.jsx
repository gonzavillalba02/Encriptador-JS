import React, {useRef, useState} from "react";
import "./encontrado.css";
import copiar from "./copiar";
import { FaCopy } from "react-icons/fa";

const Encontrado = ({encriptado}) => {

    const [copy, setCopy] = useState(true);
    const textareaRef = useRef();

    return(
        <div className="encontrado">
            {copy === false ? <FaCopy className="blank"></FaCopy> : <FaCopy className='copy'/>}
            <textarea 
            ref = {textareaRef}
            readOnly 
            value={encriptado}
            />
            <button onClick={() => {
                    copiar(textareaRef)
                    setCopy(true)
                    setTimeout(()=> {setCopy(false)}, 2000);
                }}>
                    Copiar</button>
        </div>
    )
}

export default Encontrado;