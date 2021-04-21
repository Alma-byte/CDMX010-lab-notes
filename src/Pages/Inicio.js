
import React from 'react';


function Inicio(props){
    return(
            <div className="container">
             <div className="subcontainer">
              <div className="logo">
            {props.Fraseinicio}
            {props.img}
              </div>
             <div className="Inicioapp">
            <button className="buttonInicio">imgdeapp</button>
             </div>
            </div>
            </div>
    );
}


export default Inicio;