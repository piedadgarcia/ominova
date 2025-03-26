import React from 'react';
import './../../App.css';

function Mi4Componente() {
  return (
    <div className="mi4-componente">
      <div className="texto-contenedor1">
        <p className="texto-grande1 texto-izquierda-negrita1">
          <span className="ptexto-azul">¿Qué es</span>_ominova?
        </p>
        <p className="texto-ajustado">
          Tenemos el superpoder de hacer que las cosas salgan bien, ¡Sí, lo
          creemos! Y además, pensamos que trabajando duro se puede hacer que el
          mundo sea mucho más increíble.
        </p>
        <p className="texto-separado">
          <strong className="texto-contactanos">Contáctanos</strong>
          <span className="separador"> | </span>
          <strong className="texto-compromiso">Nuestro compromiso</strong>
        </p>
      </div>
      {/* Nuevo contenedor para la imagen */}
      <div className="imagen-arcos-container">
        <img src="/Arcos.png" alt="Arcos" className="imagen-arcos" />
      </div>
    </div>
  );
}

export default Mi4Componente;
