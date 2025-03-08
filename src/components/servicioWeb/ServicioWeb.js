import React from 'react';
import Info from '../info/Info'; // Asegúrate de que la ruta sea correcta
import './../../App.css';

function ServicioWeb() {
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
              marginLeft: 50 // Añade espacio a la izquierda de la figura
            }}>

            <div style={{  
              fontFamily: 'Arial',
              fontSize: 22,
              fontWeight: 'bold',
              padding: '15px 0px',
            
            }}>
              <p>Nuestros <span style={{ color: 'grey' }}>Servicios</span></p>
            
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // Alinea los elementos a la izquierda
                marginTop: 20,
                marginLeft: 0, // Ajusta este valor según sea necesario
                fontSize: 16,
                fontWeight: 'bold',
      
      }}>
                <p>Branding</p>
                <p>Marketing</p>
                <p>Consultoría</p>
                <p>Desarrollo</p>
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
          boxSizing: 'border-box' // Incluye el padding en el ancho total
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
              width: '100%' // Asegura que el div ocupe todo el ancho del navegador
            }}>
              
              <p> Servicio de Branding </p>

              <div style={{  
              fontFamily: 'Arial',
              fontSize: '15px',
              fontWeight: 'normal',
              textAlign: 'justify', // Justifica el texto
              padding: '10px 0px',
              width: '80%' // Asegura que el div ocupe el 80% del ancho del navegador
            }}>

            <p> En Ominova, comprendemos que el branding es mucho más que una estrategia; es la clave para el éxito duradero de tu empresa, lo que el mundo recuerda de ti. Nuestra especialidad radica en identificar el potencial latente de tu marca y desarrollarlo al máximo. </p>
            <p> Para nosotros, cada proyecto es único, nos sumergimos en la esencia de tu negocio y plasmamos su personalidad en una imagen sólida y coherente, adaptándola a todas las plataformas comunicativas. Estamos aquí para hacer magia por ti.</p>
            <p> Descubre cómo hacemos que ocurra: </p>
            </div>

            <p> Diagnóstico </p>

<div style={{  
fontFamily: 'Arial',
padding: '50px 0px',
width: '100%' // Asegura que el div ocupe todo el ancho del navegador
}}>

<p> La primera fase de nuestro servicio de branding parte de comprender bien cómo se comportan tus competidores y referentes sectoriales en primer lugar, y entender bien el core o núcleo de tu empresa, aquello que te hace único. Esta fase de diagnóstico nos permite asentar las bases de lo que será tu nueva marca</p>

<div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // Alinea los elementos a la izquierda
                marginTop: 20,
                marginLeft: 0 // Ajusta este valor según sea necesario
              }}>
                <p>Análisis interno</p>
                <p>Análisis externo</p>
                <p>Conclusiones</p>
                
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