import Inicio from './Inicio';
import logo from '../Assets/logo.jpg';
import React from "react";
import './Styles/Homee.css';


function Homee() {
    return (
      <div className="App">
       <div className="Paginainicio">
          <img src={logo} width="100%" height="100%" alt="el pinche logo"></img>
       </div>
       <div className="Fraseinicio">
          <h1>Crea notas, edita, ordena y elimina</h1>
       </div>
       <Inicio/>
       </div>
    );
  }

  export default Homee;