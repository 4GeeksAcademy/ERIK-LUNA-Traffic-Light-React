//import react into the bundle
import ReactDOM from "react-dom";
import React, { useState } from 'react';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components


function Semaforo() {
    const [seleccion, setSeleccion] = useState(null);
  
    const handleClick = (luz) => {
      setSeleccion(luz);
      if( seleccion === 'verde')  {
        handleClick('verde');
      } else {
        handleClick('gris');
      }
    };

    return (
        
        <div className="Semaforo">
            <button onClick={Semaforo}>colorVerde</button>
        </div>

        
        );


//render your react application
            ReactDOM.render(<Semaforo />, document.querySelector("#app"));