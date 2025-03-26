import React from 'react';
import './../../App.css';

function InicioServicios() {
  return (
    <div>
      <p
        className="casos-de-exito texto-grande"
        style={{
          color: 'black',
          marginLeft: '80px',
          marginTop: '100px',
          marginBotton: '60px',
        }}
      >
        Servicios
      </p>

      <p
        className="texto-normal"
        style={{
          color: 'black',
          marginTop: '30px',
          marginLeft: '75px',
        }}
      >
        Siempre se puede dar más, y eso es lo que hacemos.
      </p>

      <p
        style={{
          color: 'black',
          marginTop: '30px',
          marginLeft: '75px',
          textAlign: 'justify',
          width: ' 1250px',
        }}
      >
        Los detalles marcan la diferencia, por eso en Ominova creemos que la
        calidad sólo puede venir acompañada de perfiles especializados (y
        enamorados) en sus oficios. Creamos departamentos independientes e
        interconectados de cada servicio.
      </p>

      {/* Añade el texto "Social media" alineado a la izquierda y en negrita */}
      <div className="texto-izquierda-negrita">
        <p>
          Social media <span className="texto-izquierda-negrita">Web</span>{' '}
          <span className="texto-izquierda-negrita">Camera</span>{' '}
          <span className="texto-izquierda-negrita">SEO</span>{' '}
          <span className="texto-izquierda-negrita">SEM</span>{' '}
          <span className="texto-izquierda-negrita">Hosting y dominios</span>{' '}
          <span className="texto-izquierda-negrita">Asesoría</span>
        </p>
        <div className="contenedor-imagen-texto">
          <div className="imagen-pablito">
            <img src="/Pablito.png" alt="Pablito" />
          </div>
          <div className="caja-texto">
            <p>Pablo Chanivet</p>
          </div>
          <div className="texto-hablamos">
            <p>¿HABLAMOS?</p>
            <p className="texto-secundario">
              El mundo pertenece a aquellos que no temen mancharse las manos
            </p>
            <p
              className="texto-normal1"
              style={{ alingtext: 'justify', width: '649px' }}
            >
              Pablo estará encantado de conversar sobre tu proyecto, este es su
              calendario y puedes agendar tu cita en los espacios disponibles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InicioServicios;
