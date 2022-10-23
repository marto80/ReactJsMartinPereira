import React from "react";
import './estilos.css';

const Saludo = ({greeting}) => {
  return (
   <div className="saludazo"> 
    
    <h1> {greeting} </h1> 
   
   </div>
  );
};

export default Saludo;