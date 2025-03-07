import React from 'react';
import './../../App.css';

function Mi6Componente() {
  return (
    <div className="mi6-componente">
      <div className="lista-izquierda">
        <p className="texto-azul">Ayuda</p>
        <p className="texto-negrita">Mejora continua</p>
        <p className="texto-negrita">Humildad</p>
        <p className="texto-negrita">Competitividad</p>
      </div>
      <img 
        src="PHOTO-2025-02-08-15-12-24.jpg" 
        alt="Descripción de la imagen" 
        className="imagen-centro"
      />
      <div className="lista-derecha">
        <p className="texto-normal">Ayudar a los demás</p>
        <p className="texto-negrita-grande">Porque por encima de todo trabajamos por ayudar a los demás y hacer el bien</p>
        <p className="texto-normal">Valoramos cada contribución y fomentamos relaciones basadas en el respeto mutuo. Trabajamos juntos, como iguales, para lograr nuestros objetivos comunes.</p>
      </div>
    </div>
  );
}


export default Mi6Componente;