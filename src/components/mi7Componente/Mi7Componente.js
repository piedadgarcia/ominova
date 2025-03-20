import React from 'react';
import './../../App.css';

function Mi7Componente() {
  return (
    <div className="mi7-componente">
      <div className="texto-contenedor">
        <p className="texto-grande">
          <span className="texto-negro"><strong className="texto-negro">Nuestro compromiso</strong></span>
        </p>
        <p className="texto-ajustado">
          Estamos comprometidos con los demás. Queremos que cada día que la maquinaria esté en
          funcionamiento, a la vez, estemos ayudando a crear un mundo mejor.
        </p>
        <p className="texto-centrado">
          <strong>Misión</strong>
        </p>
        <p className="texto-normal">
          Ayudamos a miles de personas a cumplir sus objetivos empresariales, profesionales y 
          personales consiguiendo hacerlo accesible a todo tipo de empresas de una forma justa, 
          sencilla, cercana, profesional, alegre y rentable.
        </p>
        <p className="texto-centrado">
          <strong>Visión</strong>
        </p>
        <p className="texto-normal">
          Nuestra visión es ser líderes en el mercado, ofreciendo soluciones innovadoras y 
          sostenibles que contribuyan al desarrollo y bienestar de la sociedad.
        </p>
        <p className="texto-centrado">
          <strong>Valores</strong>
        </p>
        <p className="texto-normal">
          Integridad, Compromiso, Innovación, Respeto y Trabajo en equipo.
        </p>
      </div>
      <img 
        src="/IMG_3740.jpg" 
        alt="IMG_3740" 
        className="imagen-lado imagen-pequena" // Añadir clase para hacer la imagen más pequeña
      />
    </div>
  );
}

export default Mi7Componente;