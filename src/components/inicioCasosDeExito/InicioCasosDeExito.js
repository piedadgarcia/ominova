import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './../../App.css';

function InicioCasosDeExito() {
  // Lista de imágenes
  const [imagenIndex, setImagenIndex] = useState(0);
  const [imagenActual, setImagenActual] = useState(0); // Estado para la imagen actual

  const imagenes = [
    '/IMG_3711.JPG',
    '/IMG_3713.JPG',
    '/IMG_3715.JPG',
    '/IMG_3716.JPG',
    '/PHOTO-2025-03-19-22-29-04.jpg',
    '/IMG_3711.JPG',
    '/IMG_3713.JPG',
    '/IMG_3715.JPG',
  ];

  const imagenesObjetivo = ['/01.png', '/021.png', '/031.png'];

  const handlePrevClick = () => {
    setImagenIndex(
      (prevIndex) => (prevIndex - 4 + imagenes.length) % imagenes.length
    );
  };

  const handleNextClick = () => {
    setImagenIndex((prevIndex) => (prevIndex + 4) % imagenes.length);
  };

  const handleImagenClick = (index) => {
    setImagenActual(index);
  };

  const imagenesVisibles = imagenes.slice(imagenIndex, imagenIndex + 4);

  return (
    <div style={{ marginTop: '90px', marginBottom: '30px' }}>
      {' '}
      {/* Usa la altura dinámica del NavMenu */}
      {/* Ajusta el margen superior */}
      <div className="inicioCadosDeExito">
        <div className="columna-derecha">
          <div className="texto-contenedor">
            <div
              className="texto-verde-container"
              style={{ textAlign: 'left' }}
            >
              <p
                className="casos-de-exito texto-grande"
                style={{
                  color: 'black',
                  marginLeft: '80px',
                  marginTop: '-200px',
                  marginBotton: '60px',
                }}
              >
                Casos de éxito
              </p>
              <p
                className="texto-normal texto-una-linea"
                style={{
                  color: 'black',
                  marginTop: '30px',
                  marginLeft: '75px',
                }}
              >
                ¿Quieres ver de qué somos capaces? Nada te lo va a contar mejor
                que nuestro trabajo.{' '}
              </p>
              <p
                className="texto-normal texto-una-linea"
                style={{
                  color: 'black',
                  marginTop: '30px',
                  marginLeft: '75px',
                }}
              >
                {' '}
                Aquí tienes una pequeña selección de casos.
              </p>
              <p
                className="descubre-casos-exito"
                style={{
                  color: 'black',
                  marginTop: '30px',
                  marginLeft: '75px',
                }}
              >
                Descubre nuestros casos de éxito
              </p>
              <div className="botones-navegacion">
                <div className="boton-circular" onClick={handlePrevClick}>
                  &lt;
                </div>
                <div className="boton-circular" onClick={handleNextClick}>
                  &gt;
                </div>
              </div>
              <div
                className="imagenes-casos-exito"
                style={{
                  display: 'flex',
                  flexWrap: 'nowrap',
                  overflow: 'hidden',
                  marginLeft: '50px',
                }}
              >
                {imagenesVisibles.map((imagen, index) =>
                  index === 0 ? (
                    <Link to="/casosDeExito1" key={index}>
                      <img
                        src={imagen}
                        alt={`IMG_${imagenIndex + index}`}
                        className="imagen-casos-exito"
                        style={{ marginLeft: '20px', marginTop: '70px' }}
                      />
                    </Link>
                  ) : (
                    <img
                      key={index}
                      src={imagen}
                      alt={`IMG_${imagenIndex + index}`}
                      className="imagen-casos-exito"
                      style={{ marginLeft: '20px', marginTop: '70px' }}
                    />
                  )
                )}
              </div>
              <div className="enfocamos-objetivos">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={imagenesObjetivo[imagenActual]}
                    alt={`Imagen ${imagenActual + 1}`}
                    className="imagen-objetivo-grande"
                    style={{ marginLeft: '20px', marginTop: '70px' }}
                  />
                  <div>
                    <p
                      style={{
                        marginLeft: '6.5em',
                        fontWeight: 'bold',
                        fontSize: '25px',
                        color: 'black',
                        margingTop: '-20px',
                        marginBottom: '30px',
                      }}
                    >
                      Nos enfocamos en cumplir tus objetivos
                    </p>
                    <p
                      style={{
                        marginLeft: '10em',
                        color: 'black',
                        marginBottom: '50px',
                        textAlign: 'justify',
                        width: '500px',
                      }}
                    >
                      Parece una utopía, pero en ominova siempre buscamos ser
                      los mejores en servicio integral, y es eso lo que
                      ofrecemos, un servicio de marketing digital integral de
                      calidad pensando en todo momento cómo mejorar el retorno
                      al cliente y en hacerlo fácil y bonito.
                    </p>
                    <p
                      style={{
                        marginLeft: '17em',
                        fontWeight: 'bold',
                        fontSize: '15px',
                        color: 'black',
                        margingTop: '70px',
                      }}
                    ></p>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        fontFamily: 'Arial',
                      }}
                    >
                      <Link
                        to="/contacto"
                        style={{
                          marginLeft: '250px',
                          width: '99px',
                          marginRight: '10px',
                        }}
                        className="blue-box"
                      >
                        Contáctanos
                      </Link>
                      <span style={{ color: 'black' }}></span>
                      <Link
                        to="/agencia"
                        style={{ textDecoration: 'none', color: 'DarkBlack' }}
                        className="white-box"
                      >
                        Sobre nosotros
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="puntos-navegacion-container"
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    marginLeft: '-800px',
                  }}
                >
                  <div className="puntos-navegacion">
                    {imagenesObjetivo.map((_, index) => (
                      <span
                        key={index}
                        className={`punto ${imagenActual === index ? 'activo' : ''}`}
                        onClick={() => handleImagenClick(index)}
                      ></span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InicioCasosDeExito;
