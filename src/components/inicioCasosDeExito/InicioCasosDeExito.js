import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import CasosDeExito1 from '../casosDeExito1/CasosDeExito1';
import './../../App.css';

function InicioCasosDeExito() {
  
   
      // Lista de imágenes
  const [imagenIndex, setImagenIndex] = useState(0);
  const [imagenActual, setImagenActual] = useState(0); // Estado para la imagen actual
  const [animar, setAnimar] = useState(false); // Estado para controlar la animación

  
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

  const imagenesObjetivo = [
    "/01.png",
    "/021.png",
    "/031.png"
  ];
 

  


  const handlePrevClick = () => {
    setImagenIndex((prevIndex) => (prevIndex - 4 + imagenes.length) % imagenes.length);
  };

  const handleNextClick = () => {
    setImagenIndex((prevIndex) => (prevIndex + 4) % imagenes.length);
  };

  const handleImagenClick = (index) => {
    setImagenActual(index);
  };

  const imagenesVisibles = imagenes.slice(imagenIndex, imagenIndex + 4);

  return (
    <div>
      <div className="inicioCadosDeExito">
       
        
        <div className="columna-derecha">
          <div className="texto-contenedor">
            <div className="texto-verde-container" style={{ textAlign: 'left' }}>
     
            
              
              
              <p className="casos-de-exito texto-grande" style={{ color: 'black', marginLeft:'300px',marginTop:'-200px',marginBotton:'60px' }}>Casos de éxito</p>
              <p className="texto-normal texto-una-linea" style={{ color: 'black',marginTop:'30px', marginLeft:'90px'}}>¿Quieres ver de qué somos capaces? Nada te lo va a contar mejor que nuestro trabajo. Aquí tienes una pequeña selección de casos.</p>
              <p className="descubre-casos-exito" style={{ color: 'black',marginTop:'30px', marginLeft:'90px' }}>Descubre nuestros casos de éxito</p>
              <div className="botones-navegacion">
                <div className="boton-circular" onClick={handlePrevClick}>&lt;</div>
                <div className="boton-circular" onClick={handleNextClick}>&gt;</div>
              </div>
              <div className="imagenes-casos-exito" style={{display:'flex',flexWrap: 'nowrap',overflow: 'hidden',marginLeft: '50px',}}>
                {imagenesVisibles.map((imagen, index) => (
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
                   
                  <img key={index} src={imagen} alt={`IMG_${imagenIndex + index}`} className="imagen-casos-exito" style={{ marginLeft: '20px', marginTop:'70px' }}/>
                )
                ))}
              </div>
              <div className="enfocamos-objetivos">
                <div style={{ display: 'flex', alignItems: 'center'}}>
                  <img src={imagenesObjetivo[imagenActual]} alt={`Imagen ${imagenActual + 1}`} className="imagen-objetivo-grande"style={{ marginLeft: '50px', marginTop:'70px' }}  />
                  <div>
                    <p style={{ marginLeft: '6.5em', fontWeight: 'bold', fontSize: '25px', color: 'black' , margingTop: '-20px', marginBottom:'30px'}}>Nos enfocamos en cumplir tus objetivos</p>
                    <p style={{ marginLeft: '10em', color: 'black', marginBottom: '50px' , textAlign:'justify'}}>Parece una utopía, pero en ominova siempre buscamos ser los mejores en servicio integral, y es eso lo que ofrecemos, un servicio de marketing digital integral de calidad pensando en todo momento cómo mejorar el retorno al cliente y en hacerlo fácil y bonito.</p>
                    <p style={{ marginLeft: '17em', fontWeight: 'bold', fontSize: '15px', color: 'black',margingTop: '70px' }}>
                      Contáctanos<span className="espacio" style={{ paddingLeft: '7ch' }}></span><span style={{ paddingLeft: '7ch', color: 'black',margingLeft: '-200px'  }}>Sobre nosotros</span>
                    </p>
                  </div>
                </div>
                <div className="puntos-navegacion-container"
                style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '-800px' }}
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
      {/* Añade el texto "SERVICIOS" centrado */}
      <div className="texto-centro" style={{marginLeft:'-500px'}}>
        <p>SERVICIOS</p>
        {/* Añade el texto "Siempre se puede dar más, y eso es lo que hacemos." centrado */}
        </div>
      <div className="texto-centro-grande">
        <p>Siempre se puede dar más, y eso es lo que hacemos.</p>
        </div>
      {/* Añade el texto "Los detalles marcan la diferencia, por eso en ominova creemos que la calidad sólo puede venir" centrado */}
      <div className="texto-centro-normal">
        <p>Los detalles marcan la diferencia, por eso en ominova creemos que la calidad sólo puede venir</p>
      </div>
     {/* Añade el texto "acompañada de perfiles especializados (y enamorados) en sus oficios. Creamos" centrado */}
     <div className="texto-centro-normal">
        <p>acompañada de perfiles especializados (y enamorados) en sus oficios. Creamos</p>
        </div>
        {/* Añade el texto "departamentos independientes e interconectados de cada servicio." centrado */}
      <div className="texto-centro-normal">
        <p>departamentos independientes e interconectados de cada servicio.</p>
    </div>
    {/* Añade el texto "Social media" alineado a la izquierda y en negrita */}
    <div className="texto-izquierda-negrita">
        <p>Social media <span className="texto-izquierda-negrita">Web</span> <span className="texto-izquierda-negrita">Camera</span> <span className="texto-izquierda-negrita">SEO</span> <span className="texto-izquierda-negrita">SEM</span> <span className="texto-izquierda-negrita">Hosting y dominios</span> <span className="texto-izquierda-negrita">Asesoría</span>
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
            <p className="texto-secundario">El mundo pertenece a aquellos que no temen mancharse las manos</p>
            <p className="texto-normal1">Pablo estará encantado de conversar sobre tu proyecto, este es su calendario y puedes agendar tu cita en los espacios disponibles.</p>
          </div>
        </div>




</div>
    </div>




  
);
}

export default InicioCasosDeExito;