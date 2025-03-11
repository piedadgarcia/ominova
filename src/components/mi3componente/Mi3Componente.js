import React, { useEffect, useState } from 'react';
import './../../App.css';

function Mi3Componente() {
  const [texto, setTexto] = useState("TODO ES PARA AYUDARTE");
  const [imagenIndex, setImagenIndex] = useState(0);
  const textos = [
    "TODO ES PARA AYUDARTE",
    "TODO ES PARA CONSTRUIR MARCA",
    "TODO ES PARA LLEGAR A TUS CLIENTES"
  ];
  const imagenes = [
    "/IMG_3711.JPG",
    "/IMG_3713.JPG",
    "/IMG_3715.JPG",
    "/IMG_3716.JPG",
    "/IMG_3698.JPG",
    "/IMG_3711.JPG",
    "/IMG_3713.JPG",
    "/IMG_3715.JPG"
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % textos.length;
      setTexto(textos[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevClick = () => {
    setImagenIndex((prevIndex) => (prevIndex - 4 + imagenes.length) % imagenes.length);
  };

  const handleNextClick = () => {
    setImagenIndex((prevIndex) => (prevIndex + 4) % imagenes.length);
  };

  const imagenesVisibles = imagenes.slice(imagenIndex, imagenIndex + 4);

  return (
    <div className="mi3-componente">
      <div className="columna-izquierda">
        <h1 className="texto-azul-centro">{texto}</h1>
        <div className="botones-centro">
          <button className="contactanos-button">Contáctanos</button>
          <p className="nuestros-servicios">Nuestros servicios</p>
        </div>
      </div>
      <div className="columna-derecha">
        <div className="texto-verde-container">
          <p className="texto-grande">Agencia de marketing digital para líderes</p>
          <p className="texto-normal">Tan sólo con la mejor calidad se pueden alcanzar los mejores resultados.</p>
          <ul>
            <li><strong>Nuestro equipo</strong></li>
            <div className="texto-e-imagenes">
              <p className="texto-verde">
                Resultados, creatividad, emoción, plazos cumplidos, marketing sencillo...todo ello depende de personas y, por eso, apostamos por formar el mejor equipo posible. Todo el equipo reúne los mismos requisitos: buena gente, pasión por su trabajo y especialización absoluta en su oficio. En la Empresa contamos con técnicos especializados en cada área de trabajo.
              </p>
              <div className="imagenes-lado-a-lado">
                <img src="/ACCOUNT MANAGER.png" alt="ACCOUNT MANAGER" className="imagen-lado-a-lado" />
                <img src="/LEADER.png" alt="LEADER" className="imagen-lado-a-lado" />
                <img src="/SPECIALIST.jpg" alt="SPECIALIST" className="imagen-lado-a-lado" />
                <img src="/imagen2.png" alt="Imagen adicional" className="imagen-grande" />
              </div>
            </div>
            </ul>
            <p className="conoce-mas"><strong>Conoce más sobre nosotros</strong></p>
          <ul>


            <li><strong>Nuestros procesos</strong></li>
            <li><strong>Nuestros clientes</strong></li>
            <li><strong>Plazos de ejecución</strong></li>
            <li><strong className="empresas-colaboradoras">Empresas colaboradoras</strong></li>
          </ul>
          <p className="casos-de-exito">Casos de éxito</p>
          <p className="texto-normal texto-una-linea">¿Quieres ver de qué somos capaces? Nada te lo va a contar mejor que nuestro trabajo. Aquí tienes una pequeña selección de casos.</p>
          <p className="descubre-casos-exito">Descubre nuestros casos de éxito</p>
          <div className="botones-navegacion">
            <div className="boton-circular" onClick={handlePrevClick}>&lt;</div>
            <div className="boton-circular" onClick={handleNextClick}>&gt;</div>
          </div>
          <div className="imagenes-casos-exito">
            {imagenesVisibles.map((imagen, index) => (
              <img key={index} src={imagen} alt={`IMG_${imagenIndex + index}`} className="imagen-casos-exito" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mi3Componente;