import './App.css';
import React from 'react';
import Desencriptado from './Components/Desencriptado/desencriptado';
import Encriptado from './Components/Encriptado/encriptado';

function App() {
  return (
    <div className='dom'>
      <Desencriptado />
      <Encriptado />
    </div>
  );
}

export default App;
