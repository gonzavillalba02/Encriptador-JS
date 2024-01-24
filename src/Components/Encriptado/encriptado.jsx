import React, {useState} from "react";
import "./encriptado.css";
import NoEncontrado from "./No encontrado/no_encontrado";
import Encontrado from "./Encontrado/encontrado";

const Encriptado = () => {

    const [step, SetStep] = useState(true);

    const handelStep = () => {
        SetStep(!step)
    }

    return(
        <div className="encriptado" >
            {step === false ? <NoEncontrado props={handelStep}/> : <Encontrado props={handelStep}/>}
        </div>
    )
}

export default Encriptado;