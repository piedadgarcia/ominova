import React, { useState } from 'react';
import './../../App.css';

function Mi8Componente() {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/IMG_1901.jpg',
    '/IMG_1909.jpg',
    '/IMG_1916.jpg',
    '/IMG_1917.jpg',
    '/IMG_1932.jpg',
    '/IMG_2501.jpg',
    '/IMG_2494.jpg',
    '/IMG_2509.jpg',
    '/IMG_2510.jpg',
  ];

  const handleMouseEnter = (section) => {
    setHoveredSection(section);
  };

  const handleMouseLeave = () => {
    setHoveredSection(null);
  };

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
          <p
            className={`texto-grande ${hoveredSection === '2023-Actualidad' ? 'texto-azul' : 'texto-negro'}`}
            onMouseEnter={() => handleMouseEnter('2023-Actualidad')}
            onMouseLeave={handleMouseLeave}
          >
            2023-Actualidad: Trayectoria
          </p>
          <p>
            En seis años, hemos experimentado un crecimiento acumulado de casi el 100% anual. 
            Hemos formado un equipo de más de 50 personas y construido una cartera de clientes 
            muy diversificada y ofreciendo un servicio integral. Nos hemos convertido en una 
            consultora de referencia a nivel nacional.
          </p>
          <p
            className={`texto-grande ${hoveredSection === 'Presente' ? 'texto-azul' : 'texto-negro'}`}
            onMouseEnter={() => handleMouseEnter('Presente')}
            onMouseLeave={handleMouseLeave}
          >
            Presente: En qué punto se encuentra ominova
          </p>
          <p className="texto-normal-espaciado">
            Actualmente contamos con más de 300 clientes activos y un histórico de más de 2500 clientes, 
            consolidando nuestro sistema de trabajo así como nuestra propuesta de valor.
          </p>
          <p
            className={`texto-grande ${hoveredSection === 'Futuro' ? 'texto-azul' : 'texto-negro'}`}
            onMouseEnter={() => handleMouseEnter('Futuro')}
            onMouseLeave={handleMouseLeave}
          >
            Futuro
          </p>
          <p className="texto-normal-espaciado">
            Nuestro sueño es convertirnos en la marca de consultoría de marketing digital más relevante del mundo, 
            expandiéndonos territorialmente, aumentando nuestra autoridad y número de clientes, y cumpliendo nuestro 
            principal objetivo: ayudar a tantas personas como sea posible mientras hacemos lo que más nos gusta.
          </p>
        </div>
      </div>
      <div className="carousel">
        <div className="carousel-images">
          {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
            <img key={index} src={image} alt={`Imagen ${index + 1}`} className="carousel-image" />
          ))}
        </div>
        <div className="carousel-dots">
          {Array.from({ length: 6 }).map((_, index) => (
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