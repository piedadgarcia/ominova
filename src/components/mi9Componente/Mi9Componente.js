import React from 'react';
import './../../App.css';

function Mi9Componente() {
  return (
    <div className="mi9-componente">
      <div className="texto-izquierda">
        <p className="texto-grande-negrita">Casos de éxito</p>
      </div>
      <div className="filtros">
        <span className="filtro">Todos</span>
        <span className="filtro">Social</span>
        <span className="filtro">Industrial</span>
        <span className="filtro">Farmacéutico</span>
        <span className="filtro">Organizaciones</span>
      </div>
      {/* Aquí puedes agregar más contenido */}
    </div>
  );
}

export default Mi9Componente;