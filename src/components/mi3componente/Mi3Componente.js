import React, { useState, useEffect } from 'react';
import './../../App.css';

function Mi3Componente() {
  const [texto, setTexto] = useState("TODO ES PARA AYUDARTE");
  const textos = [
    "TODO ES PARA AYUDARTE",
    "TODO ES PARA CONSTRUIR MARCA",
    "TODO ES PARA LLEGAR A TUS CLIENTES"
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % textos.length;
      setTexto(textos[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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
          <p className="texto-normal">Tan sólo con la mejor calidad se pueden alcanzar los mejores resultados</p>
          <ul>
            <li><strong>Conoce más sobre nosotros</strong></li>
            <div className="texto-e-imagenes">
              <p className="texto-verde">
                Resultados, creatividad, emoción, plazos cumplidos, marketing sencillo...todo ello depende de personas y, por eso, apostamos por formar el mejor equipo posible. Todo el equipo reúne los mismos requisitos: buena gente, pasión por su trabajo y especialización absoluta en su oficio. En la Empresa contamos con técnicos especializados en cada área de trabajo.
              </p>
              <div className="imagenes-lado-a-lado">
                <img src="/PHOTO-2025-02-08-15-02-00.jpg" alt="PHOTO-2025-02-08-15-02-00" className="imagen-lado-a-lado" />
                <img src="/PHOTO-2025-02-08-15-04-18.jpg" alt="PHOTO-2025-02-08-15-04-18" className="imagen-lado-a-lado" />
                <img src="/PHOTO-2025-02-08-15-09-32.jpg" alt="PHOTO-2025-02-08-15-09-32" className="imagen-lado-a-lado" />
              </div>
            </div>
            <li><strong>Nuestros procesos</strong></li>
            <li><strong>Nuestros clientes</strong></li>
            <li><strong>Plazos de ejecución</strong></li>
            <li><strong>Empresas colaboradoras</strong></li>
          </ul>
          <p className="casos-de-exito">Casos de éxito</p>
          <p className="texto-normal">¿Quieres ver de qué somos capaces? Nada te lo va a contar mejor que nuestro trabajo. Aquí tienes una pequeña selección de casos.</p>
          <div className="imagenes-casos-exito">
            <img src="/IMG_3696.JPG" alt="IMG_3696" className="imagen-casos-exito" />
            <img src="/IMG_3697.JPG" alt="IMG_3697" className="imagen-casos-exito" />
            <img src="/IMG_3698.JPG" alt="IMG_3698" className="imagen-casos-exito" />
            <img src="/IMG_3699.JPG" alt="IMG_3699" className="imagen-casos-exito" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mi3Componente;