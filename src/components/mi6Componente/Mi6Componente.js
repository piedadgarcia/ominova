import React, { useState } from 'react';
import './../../App.css';

function Mi6Componente() {
  const [textoSeleccionado, setTextoSeleccionado] = useState(null); // Estado para el texto seleccionado
  const [videoSource, setVideoSource] = useState('video ayuda.mp4'); // Estado para la fuente del video

  const handleTextoClick = (texto) => {
    setTextoSeleccionado(texto); // Actualiza el texto seleccionado

    // Cambia la fuente del video según el texto seleccionado
    switch (texto) {
      case 'Mejora continua':
        setVideoSource('video-mejora-continua.mp4');
        break;
      case 'Ayuda':
        setVideoSource('video ayuda.mp4');
        break;
      case 'Humildad':
        setVideoSource('video-humildad.mp4'); // Puedes agregar más casos si es necesario
        break;
      case 'Competitividad':
        setVideoSource('video-competitividad.mp4');
        break;
      default:
        setVideoSource('video ayuda.mp4'); // Valor por defecto
    }
  };

  return (
    <div className="mi6-componente">
      <div className="lista-izquierda">
        {/* Texto "Ayuda" */}
        <p
          className={`texto-negrita ${textoSeleccionado === 'Ayuda' ? 'texto-azul1' : ''}`}
          onClick={() => handleTextoClick('Ayuda')}
        >
          Ayuda
        </p>

        <p
          className={`texto-negrita ${textoSeleccionado === 'Mejora continua' ? 'texto-seleccionado' : ''}`}
          onClick={() => handleTextoClick('Mejora continua')}
        >
          Mejora continua
        </p>
        <p
          className={`texto-negrita ${textoSeleccionado === 'Humildad' ? 'texto-seleccionado' : ''}`}
          onClick={() => handleTextoClick('Humildad')}
        >
          Humildad
        </p>
        <p
          className={`texto-negrita ${textoSeleccionado === 'Competitividad' ? 'texto-seleccionado' : ''}`}
          onClick={() => handleTextoClick('Competitividad')}
        >
          Competitividad
        </p>
      </div>
      {/* Video */}
      <div className="video-container">
        <video controls width="600" key={videoSource}>
          <source src={videoSource} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
      <div className="lista-derecha">
        {/* Mueve "Ayudar a los demás" arriba */}
        <p className="texto-negrita1">Ayudar a los demás</p>

        {/* Texto "Porque por encima..." */}
        <p className="texto-grande-negrita-derecha">
          Porque por encima de todo trabajamos por ayudar a los demás y hacer el bien
        </p>

        {/* Texto "Valoramos cada contribución..." */}
        <p className="texto-normal-derecha">
          Valoramos cada contribución y fomentamos relaciones basadas en el respeto mutuo. Trabajamos juntos, como
          iguales, para lograr nuestros objetivos comunes.
        </p>
      </div>
    </div>
  );
}

export default Mi6Componente;