import React, { useState } from 'react';
import './../../App.css';

function Mi7Componente() {
  const [textoVisible, setTextoVisible] = useState(null); // Estado para controlar qué texto está visible

  const toggleTexto = (texto) => {
    // Si el texto ya está visible, lo oculta; de lo contrario, lo muestra y oculta los demás
    setTextoVisible(textoVisible === texto ? null : texto);
  };

  return (
    <div className="mi7-componente">
      <div className="texto-contenedor">
        <p className="texto-grande2">
          <span className="texto-negro">
            <strong className="texto-negro">Nuestro compromiso</strong>
          </span>
        </p>
        <p className="texto-ajustado1">
          Estamos comprometidos con los demás. Queremos que cada día que la
          maquinaria esté en funcionamiento, a la vez, estemos ayudando a crear
          un mundo mejor.
        </p>
        {/* Misión */}
        <p className="texto-centrado">
          <span>
            <strong>Misión</strong>
          </span>
          <button
            className="boton-toggle"
            onClick={() => toggleTexto('mision')}
          >
            {textoVisible === 'mision' ? '˅' : '^'}
          </button>
        </p>
        {textoVisible === 'mision' && (
          <p className="texto-normal2">
            Ayudamos a miles de personas a cumplir sus objetivos empresariales,
            profesionales y personales consiguiendo hacerlo accesible a todo
            tipo de empresas de una forma justa, sencilla, cercana, profesional,
            alegre y rentable.
          </p>
        )}

        {/* Visión */}
        <p className="texto-centrado">
          <span>
            <strong>Visión</strong>
          </span>
          <button
            className="boton-toggle"
            onClick={() => toggleTexto('vision')}
          >
            {textoVisible === 'vision' ? '˅' : '^'}
          </button>
        </p>
        {textoVisible === 'vision' && (
          <p className="texto-normal2">
            Revolucionar la industria del marketing y la tecnologia de máximo
            nivel, haciéndola accesible económicamaente, justa, transparente,
            industrializada, cercana y rentable. Convertirnos en la empresa de
            marketing más importante de España en 5 años.
          </p>
        )}

        {/* Valores */}
        <p className="texto-centrado valores">
          <span>
            <strong>Valores</strong>
          </span>
          <button
            className="boton-toggle"
            onClick={() => toggleTexto('valores')}
          >
            {textoVisible === 'valores' ? '˅' : '^'}
          </button>
        </p>
        {textoVisible === 'valores' && (
          <>
            <p className="texto-normal">
              Integridad, Compromiso, Innovación, Respeto y Trabajo en equipo.
            </p>
            <p className="texto-normal3">
              En Ominova creemos en 4 pilares fundamentales que son la ayuda, la
              humildad, la mejora continua y la competitividad.
            </p>
          </>
        )}
      </div>

      <img
        src="/IMG_3740.jpg"
        alt="IMG_3740"
        className="imagen-lado1 imagen-pequena"
      />
    </div>
  );
}

export default Mi7Componente;
