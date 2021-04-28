
import React from 'react';
import { useHistory } from "react-router";


function Inicio(props) {
  const history = useHistory();
  const historyWindow = () => {
    history.push("/Note")
  }

  return (
    <div className="container">
      <div className="subcontainer">
        <div className="logo">
          {props.Fraseinicio}
          {props.img}
        </div>
        <div className="Inicioapp">
          <button onClick={historyWindow}
            className="buttonInicio">imgdeapp</button>
        </div>
      </div>
    </div>
  );
}


export default Inicio;