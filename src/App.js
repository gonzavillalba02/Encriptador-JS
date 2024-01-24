import './App.css';
import React, { useState } from 'react';
import Desencriptado from './Components/Desencriptado/desencriptado';
import Encriptado from './Components/Encriptado/encriptado';
import hacerencriptacion from './hacerencriptacion';
import hacerdesencriptacion from './hacerdesencriptacion';

function App() {
  const [text, setText] = useState("");
  const [encriptado, setEncriptado] = useState("");

  const encriptarboton = (text) => {
    setEncriptado(hacerencriptacion(text))
  }

  const desencriptarboton = (text) => {
    setEncriptado(hacerdesencriptacion(text))
  }

  return (
    <div className='dom'>
      <Desencriptado 
      setText={setText} 
      text={text}
      encriptarboton={encriptarboton}
      desencriptarboton={desencriptarboton}
      />
      <Encriptado 
      text={text}
      encriptado={encriptado}
      />
    </div>
  );
}

export default App;
