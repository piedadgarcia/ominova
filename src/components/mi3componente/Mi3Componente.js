import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './../../App.css';

function Mi3Componente() {
  const [texto, setTexto] = useState("TODO ES PARA AYUDARTE");
  const [imagenIndex, setImagenIndex] = useState(0);
  const [imagenActual, setImagenActual] = useState(0); // Estado para la imagen actual
  const [animar, setAnimar] = useState(false); // Estado para controlar la animación

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



  
  const imagenesObjetivo = [
    "/01.png",
    "/021.png",
    "/031.png"
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % textos.length;
      setTexto(textos[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimar((prevAnimar) => !prevAnimar);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
      <div className="mi3-componente">
        {/* Nuevo div para la imagen */}
        <div className="imagen-oficina">
          <img src="/OFICINA 1.JPG" alt="Oficina" />
  </div>







        <div className="columna-izquierda">
          {/* Puedes añadir contenido aquí si es necesario */}
        </div>
        <div className="columna-derecha">
          <div className="texto-contenedor">
            <div className="texto-verde-container" style={{ textAlign: 'left' }}>
              <h1 className="texto-azul-centro">{texto}</h1>
              <div className="botones-centro">
                <button className="contactanos-button">Contáctanos</button>
                <p className="nuestros-servicios" style={{ color: 'black', margingLeft:-300 }}>Nuestros servicios</p>
              </div>
              <p className="texto-grande" style={{ color: 'black', fontWeight: 'bold', textAlign: 'left' }}>Agencia de marketing digital para líderes</p>
              <p className="texto-normal" style={{ color: 'black', textAlign: 'left' }}>Tan sólo con la mejor calidad se pueden alcanzar los mejores resultados.</p>
              <ul>
              <li className="texto-equipo">
                <strong>Nuestro equipo</strong>
              </li>
               
              

                <div className="texto-e-imagen">
                  <p className="texto-verde texto-izquierda" style={{ color: 'black', textAlign: 'left', marginTop: '10px',marginLeft:'-500px' }}>
                    Resultados, creatividad, emoción, plazos cumplidos, marketing sencillo...todo ello depende de personas y, por eso, apostamos por formar el mejor equipo posible. Todo el equipo reúne los mismos requisitos: buena gente, pasión por su trabajo y especialización absoluta en su oficio. En la Empresa contamos con técnicos especializados en cada área de trabajo.
                  </p>
                  <div className="imagen-contenedor">
                    <img src="/imagen2.png" alt="Imagen adicional" className="imagen-lado-derecho" />
                    <div className={`imagenes-posicionadas ${animar ? 'animar' : ''}`}>
                      <img src="/ACCOUNT MANAGER.png" alt="ACCOUNT MANAGER" className="imagen-centro3" />
                      <img src="/LEADER.png" alt="LEADER" className="imagen-centro" />
                      <img src="/SPECIALIST.jpg" alt="SPECIALIST" className="imagen-centro4" />
                    </div>
                  </div>
                </div>
              </ul>
              <p className="conoce-mas"><strong style={{ color: 'black',marginLeft:'-450px', marginTop:'0px' }}>Conoce más sobre nosotros</strong></p>
              <ul>
                <li className="texto-equipo">
                  <strong>Nuestros procesos</strong>                 
                  </li>
                  <p className="texto-normal" style={{ color: 'black', textAlign: 'left', marginLeft: '-500px', marginTop: '10px' }}>
                    Damos servicio al cliente incluso antes de que nos conozca. Es algo que repetimos mucho, y es que es cierto. 
                    Invertimos mucho personal y recursos en optimizar los procesos de la compañía: desde la creación de una web, 
                    una campaña o una marca, hasta la gestión diaria de la estrategia social media o del posicionamiento SEO de 
                    una tienda online. El mejor funcionamiento depende de unos procesos optimizados.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '100px', marginTop: '-150px' }}>
                  <img src="/Cover1.png" alt="Imagen de portada 1" style={{ width: '550px', height: 'auto', marginBottom: '10px' }} />
                 <img src="/Cover3.png" alt="Imagen de portada 3" style={{ width: '100px', height: 'auto', marginTop: '140px',marginLeft:'-200px', position:'absolute'}} />


                  
 
                  </div>
                
{/* Contenedor independiente para "Sin título" */}
<div style={{ display: 'flex', justifyContent: 'flex-end', marginLeft: '90px', marginRight: '50px', marginTop: '50px' }}>
  <img src="/Sin título.png" alt="Imagen sin título" style={{ width: '550px', height: 'auto', marginLeft: '100px' }} />
</div>
{/* Contenedor independiente para Cover2 */}
<div style={{ position: 'relative', marginTop: '-600px', textAlign: 'center' }}>
  <img src="/Cover2.png" alt="Imagen de portada 2" style={{ width: '100px', height: 'auto', position: 'absolute',marginLeft:'-100px',marginTop:'0px' }} />
</div>

{/* Contenedor independiente para Cover4 */}
<div style={{ position: 'relative', marginTop: '-50px', textAlign: 'center',marginLeft:'-200px'}}>
  <img src="/Cover4.png" alt="Imagen de portada 4" style={{ width: '100px', height: 'auto', position: 'absolute',marginLeft:'220px',marginTop:'-95px'}} />
</div>

{/* Contenedor independiente para Cover5 */}
<div style={{ position: 'absolute', marginTop: '-150px', textAlign: 'center' }}>
  <img src="/Cover5.png" alt="Imagen de portada 5" style={{ width: '100px', height: 'auto', position: 'absolute',marginTop:'152px',marginLeft:'515px'}} />
</div>

                  <p className="texto-normal" style={{ color: 'black', textAlign: 'left', marginLeft: '-480px', marginTop: '50px' }}>
                    <strong>Conócenos más a fondo</strong>
                  </p>








                <li className="texto-equipo"style={{ marginTop: '300px' }}>
                  <strong>Nuestros clientes</strong>                 
                  </li>
                  <p className="texto-normal" style={{ color: 'black', textAlign: 'left', marginLeft: '-500px', marginTop: '10px' }}>
                    Nuestro foco: los clientes. Nos obsesionamos con dar valor a los clientes, ya que sois la razón de nuestra compañía. 
                    Desde el inicio del proyecto, durante su desarrollo y en su finalización, cuidamos cada etapa con el máximo esmero 
                    para ofrecer la mejor calidad posible, tanto en el producto como en la comunicación, que es igual de importante. 
                    Nos esforzamos al máximo porque seáis partícipes en todo momento.
                  </p>






                  <p className="texto-normal" style={{ color: 'black', textAlign: 'left', marginLeft: '-480px', marginTop: '0px' }}>
                    <strong>Conviértete en cliente ya</strong>
                  </p>


              </ul>
              <p className="casos-de-exito texto-grande" style={{ color: 'black',marginTop:'200px' }}>Casos de éxito</p>
              <p className="texto-normal texto-una-linea" style={{ color: 'black' }}>¿Quieres ver de qué somos capaces? Nada te lo va a contar mejor que nuestro trabajo. Aquí tienes una pequeña selección de casos.</p>
              <p className="descubre-casos-exito" style={{ color: 'black' }}>Descubre nuestros casos de éxito</p>
              <div className="botones-navegacion">
                <div className="boton-circular" onClick={handlePrevClick}>&lt;</div>
                <div className="boton-circular" onClick={handleNextClick}>&gt;</div>
              </div>
              <div className="imagenes-casos-exito">
                {imagenesVisibles.map((imagen, index) => (
                  <img key={index} src={imagen} alt={`IMG_${imagenIndex + index}`} className="imagen-casos-exito" />
                ))}
              </div>
              <div className="enfocamos-objetivos">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={imagenesObjetivo[imagenActual]} alt={`Imagen ${imagenActual + 1}`} className="imagen-objetivo-grande" />
                  <div>
                    <p style={{ marginLeft: '6.5em', fontWeight: 'bold', fontSize: '25px', color: 'black' }}>Nos enfocamos en cumplir tus objetivos</p>
                    <p style={{ marginLeft: '10em', color: 'black' }}>Parece una utopía, pero en ominova siempre buscamos ser los mejores en servicio integral, y es eso lo que ofrecemos, un servicio de marketing digital integral de calidad pensando en todo momento cómo mejorar el retorno al cliente y en hacerlo fácil y bonito.</p>
                    <p style={{ marginLeft: '12em', fontWeight: 'bold', fontSize: '15px', color: 'black' }}>
                      Contáctanos<span className="espacio" style={{ paddingLeft: '15ch' }}></span><span style={{ paddingLeft: '15ch', color: 'black' }}>Sobre nosotros</span>
                    </p>
                  </div>
                </div>
                <div className="puntos-navegacion-container">
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
      <div className="texto-centro">
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

export default Mi3Componente;