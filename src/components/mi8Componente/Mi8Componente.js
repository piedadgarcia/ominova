import React, { useState } from 'react';
import './../../App.css';

function Mi8Componente() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/Oficina 1.jpg',
    '/Oficina 2.jpg',
    '/Oficina 3.JPG',
    '/Oficina 4.jpg',
    '/Oficina 5.jpg',
    '/Oficina 6.JPG',
  ];

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="mi8-componente">
      <div className="video-texto-contenedor">
        <video controls className="video-centro">
          <source src="/VIDEO-2025-02-14-10-25-02.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        <div className="texto-derecha">
          <p className="texto-grande texto-inicios">Inicios</p>
          <p className="texto-normal4">
            Ominova nació desde cero en 2025, sin financiación ni experiencia previa en la industria del marketing, 
            aprovechando la fuerte conexión de su fundador con el mundo de la Consultoría en Madrid.
          </p>
          <p className="texto-grande texto-2023-actualidad">2023-Actualidad: Trayectoria</p>
          <p className="texto-normal5">
            En este año de 2025, hemos experimentado un crecimiento bastante importante. 
            Hemos formado un equipo de más de 50 personas y construido una cartera de clientes 
            muy diversificada y ofreciendo un servicio integral. Nos hemos convertido en una 
            consultora de referencia a nivel nacional.
          </p>
          <p className="texto-grande texto-presente">Presente: En qué punto se encuentra ominova</p>
          <p className="texto-normal-espaciado">
            Actualmente contamos con más de 300 clientes activos y un histórico de más de 2500 clientes, 
            consolidando nuestro sistema de trabajo así como nuestra propuesta de valor.
          </p>
          <p className="texto-grande texto-futuro">Futuro</p>
          <p className="texto-normal-espaciado">
            Nuestro sueño es convertirnos en la marca de consultoría de marketing digital más relevante del mundo, 
            expandiéndonos territorialmente, aumentando nuestra autoridad y número de clientes, y cumpliendo nuestro 
            principal objetivo: ayudar a tantas personas como sea posible mientras hacemos lo que más nos gusta.
          </p>
        </div>
      </div>
      <div className="carousel">
        <div className="carousel-images">
          {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
            <img key={index} src={image} alt={`Imagen ${index + 1}`} className="carousel-image" />
          ))}
        </div>
        <div className="carousel-dots">
          {Array.from({ length: images.length - 3 }).map((_, index) => (
            <span
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mi8Componente;