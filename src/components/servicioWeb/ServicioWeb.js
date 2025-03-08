import React, { useState } from 'react';
import Info from '../info/Info'; // Asegúrate de que la ruta sea correcta
import './../../App.css';

function ServicioWeb() {
  const [showTextLlamada, setShowTextLlamada] = useState(false);
  const [showTextPrebriefing, setShowTextPrebriefing] = useState(false);

  const toggleTextLlamada = () => {
    setShowTextLlamada(!showTextLlamada);
  };

  const toggleTextPrebriefing = () => {
    setShowTextPrebriefing(!showTextPrebriefing);
  };

  return (
    <div>
      <Info />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 15,
          width: '50%', // Asegura que el componente ocupe la mitad del ancho del navegador
          boxSizing: 'border-box' // Incluye el padding en el ancho total
        }}>
          
            <div style={{
              marginTop: 50,
              marginLeft: -320 // Añade espacio a la izquierda de la figura
            }}>

            <div style={{  
              fontFamily: 'Arial',
              fontSize: 28,
              fontWeight: 'bold',
              padding: '15px 0px',
              marginLeft: 250,
            
            }}>
              <p>Nuestros <span style={{ color: 'grey' }}>Servicios</span></p>
            
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // Alinea los elementos a la izquierda
                marginTop: 20,
                marginLeft: 2, // Ajusta este valor según sea necesario
                fontSize: 16,
                fontWeight: 'bold',
      
      }}>
             <div className="caja-con-lineas" style={{ width: '450px' }}>
                <p>Consultoría</p>
                </div>
                <div className="caja-con-lineas" style={{ width: '450px' }}>
                <p>Servicio Web</p>
                </div>
                {/* Añade más elementos aquí según sea necesario */}
              </div>
            </div>
        </div>
        </div>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start', // Alinea los elementos hacia el inicio del contenedor
          alignItems: 'flex-start', // Alinea los elementos a la izquierda
          padding: 15,
          width: '50%', // Asegura que el componente ocupe la mitad del ancho del navegador
          boxSizing: 'border-box', // Incluye el padding en el ancho total
          
     }}>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start', // Alinea los elementos hacia el inicio del contenedor
              alignItems: 'flex-start', // Asegura que los elementos estén alineados a la izquierda
              fontSize: 28,
              fontFamily: 'Arial',
              fontWeight: 'bold',
              padding: '50px 0px',
              width: '120%', // Asegura que el div ocupe todo el ancho del navegador
              marginLeft: -40
            
            }}>
              
              <p> Servicio Web </p>

              <div style={{  
              fontFamily: 'Arial',
              fontSize: '15px',
              fontWeight: 'normal',
              textAlign: 'justify', // Justifica el texto
              padding: '10px 0px',
              width: '80%' // Asegura que el div ocupe el 80% del ancho del navegador
            }}>

            <p> En Ominova estamos especializados en diseño y desarrollo web. Trabajamos con los principales CMS del mercado y ofrecemos páginas web a medida, de una alta calidad y con un enorme rendimiento. Tanto si buscas un ecommerce como una web corporativa sencilla, nos adaptamos a tus necesidades. </p>
            <p> Descubre cómo hacemos que ocurra: </p>
            </div>

            <p> Toma de contacto </p>

<div style={{  
fontFamily: 'Arial',
fontSize: '15px',
fontWeight: 'normal',
textAlign: 'justify', // Justifica el texto
padding: '10px 0px',
width: '80%' // Asegura que el div ocupe todo el ancho del navegador
}}>

<p> En la fase de onboarding queremos asegurarnos que te sientas como en tu casa. Queremos conocer tu proyecto, las ideas que tienes, cómo quieres desarrollarlas y queremos asesorarte en lo que, creemos, más puede ayudarte a desarrollar tu nueva web. Queremos que nuestro método esté alineado con tus objetivos, así que esta fase de toma de contacto nos valdrá para establecer prioridades, iniciar la estrategia, recabar información y orientarte con los plazos.</p>

<div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // Alinea los elementos a la izquierda
                marginTop: 20,
                marginLeft: 0, // Ajusta este valor según sea necesario
                fontWeight: 'bold'
    }}>
                 <div className="caja-con-lineas" style={{ width: '657px', position: 'relative' }}>
                <p>Llamada de bienvenida</p>
                <span 
                  style={{ 
                    position: 'absolute', 
                    right: '10px', 
                    top: '50%', 
                    transform: 'translateY(-50%)', 
                    cursor: 'pointer' 
                  }} 
                  onClick={toggleTextLlamada}
                >
                  +
                </span>
                </div>
                {showTextLlamada && (
                  <div style={{ marginTop: '10px' }}>
                    <p style={{ color: 'grey' }}>Lo primero antes de dejar el diseño de tu web o la creación de una tienda online en manos de una agencia, es conocer si realmente es lo que necesitas.</p>
                    <p style={{ color: 'grey' }}>El equipo de consultores te llamará para que les cuentes todo lo que necesitamos para arrancar con tu idea y ver cómo sacarle el máximo partido.</p>
                    <p style={{ color: 'grey' }}>Cada empresa se encuentra en una etapa diferente y por ello lo mejor es recibir una consultoría gratis que te ayude a aclarar tus ideas y el futuro de tu empresa.</p>
                  </div>
                )}
                <div className="caja-con-lineas" style={{ width: '657px', position: 'relative' }}> 
                <p>Envío prebriefing</p>
                <span 
                  style={{ 
                    position: 'absolute', 
                    right: '10px', 
                    top: '50%', 
                    transform: 'translateY(-50%)', 
                    cursor: 'pointer' 
                  }} 
                  onClick={toggleTextPrebriefing}
                >
                  +
                </span>
                </div>
                {showTextPrebriefing && (
                  <div style={{ marginTop: '10px' }}>
                    <p style={{ color: 'grey' }}>Lo primero antes de dejar el diseño de tu web o la creación de una tienda online en manos de una agencia, es conocer si realmente es lo que necesitas.</p>
                    <p style={{ color: 'grey' }}>El equipo de consultores te llamará para que les cuentes todo lo que necesitamos para arrancar con tu idea y ver cómo sacarle el máximo partido.</p>
                    <p style={{ color: 'grey' }}>Cada empresa se encuentra en una etapa diferente y por ello lo mejor es recibir una consultoría gratis que te ayude a aclarar tus ideas y el futuro de tu empresa.</p>
                  </div>
                )}
                <div className="caja-con-lineas" style={{ width: '657px' }}>
                <p>En caso de restailling: Servicio puntual SEO</p>
                </div>
                
                {/* Añade más elementos aquí según sea necesario */}
              </div>
            </div>

            <p> ADN de marca </p>

<div style={{  
fontFamily: 'Arial',
padding: '50px 0px',
width: '100%' // Asegura que el div ocupe todo el ancho del navegador
}}>

<p> Los orígenes de tu marca, tus bases. El ADN de tu marca engloba todo lo que expresa tu empresa públicamente, la forma en la que se te percibe y tus ideales.</p>

<div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // Alinea los elementos a la izquierda
                marginTop: 20,
                marginLeft: 0 // Ajusta este valor según sea necesario
              }}>
                <p>Briefing</p>
                <p>Brand Wheel</p>
                <p>Posicionamiento</p>
                <p>Valores de marca</p>
                <p>Personalidad de marca</p>
                <p>Naming</p>
                <p>Taglining</p>
                <p>ESlogans</p>
                {/* Añade más elementos aquí según sea necesario */}
              </div>
            </div>

            <p> Construcción visual </p>

<div style={{  
fontFamily: 'Arial',
padding: '50px 0px',
width: '100%' // Asegura que el div ocupe todo el ancho del navegador
}}>

<p> Cada uno de estos aspectos se trabaja de manera meticulosa para asegurarnos de construir una identidad de marca sólida y coherente en todos los aspectos visuales y creativos.</p>

<div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // Alinea los elementos a la izquierda
                marginTop: 20,
                marginLeft: 0 // Ajusta este valor según sea necesario
              }}>
                <p>Concepto visual</p>
                <p>Isotipo</p>
                <p>Logotipo</p>
                <p>Imagotipo</p>
                <p>Entramado gráfico</p>
                <p>Paleta de color</p>
                <p>Tipografía complementaria</p>
                <p>Fotogenia</p>
                <p>Contexto creativo</p>
                <p>Manual de identidad</p>
                <p>Motion graphics</p>
                {/* Añade más elementos aquí según sea necesario */}
              </div>
            </div>

            <p> Construcción verbal </p>

<div style={{  
fontFamily: 'Arial',
padding: '50px 0px',
width: '100%' // Asegura que el div ocupe todo el ancho del navegador
}}>

<p> La identidad verbal de tu marca es la forma que comunicas tus mensajes, lo que transmites, las sensaciones que provocas y las emociones que generas con tu tono.</p>

<div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // Alinea los elementos a la izquierda
                marginTop: 20,
                marginLeft: 0 // Ajusta este valor según sea necesario
              }}>
                <p>Tono de voz</p>
                <p>Mensaje</p>
                <p>Lema</p>
                <p>Touchpoints</p>
         
                {/* Añade más elementos aquí según sea necesario */}
              </div>
            </div>

            <p> Activación de marca </p>

<div style={{  
fontFamily: 'Arial',
padding: '50px 0px',
width: '100%' // Asegura que el div ocupe todo el ancho del navegador
}}>

<p> Con todos los elementos de tu marca unificados, es hora de ponerlos a la vista de todo el mundo. Tanto en el entorno de tu empresa como en lugares públicos en distintos formatos de publicidad, haremos que la visibilidad sea máxima y la presencia notable.</p>

<div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // Alinea los elementos a la izquierda
                marginTop: 20,
                marginLeft: 0 // Ajusta este valor según sea necesario
              }}>
                <p>Aplicaciones internas</p>
                <p>Análisis comerciales</p>
                <p>Aplicaciones digitales</p>
                
                {/* Añade más elementos aquí según sea necesario */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicioWeb;