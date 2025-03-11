import React, { useState } from 'react';
import Info from '../info/Info'; // Asegúrate de que la ruta sea correcta
import './../../App.css';

function Lanzamiento() {
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
        <div style={{
           
            fontSize: 27,
            fontFamily: 'Arial',
            fontWeight: 'bold',
            
          }}>
                <p> Toma de contacto </p>

                <div style={{

fontFamily: 'Arial',
fontSize: '15px',
fontWeight: 'normal',
textAlign: 'justify', // Justifica el texto
padding: '0px 0px',
width: '80%' // Asegura que el div ocupe todo el ancho del navegador
}}>
<p> En esta fase queremos asegurarnos que te sientas como en tu casa. Queremos conocer tu proyecto, las ideas que tienes, cómo quieres desarrollarlas y queremos asesorarte en lo que, creemos, más puede ayudarte a desarrollar tu nueva web. Queremos que nuestro método esté alineado con tus objetivos, así que esta fase de toma de contacto nos valdrá para establecer prioridades, iniciar la estrategia, recabar información y orientarte con los plazos.</p>

<div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // Alinea los elementos a la izquierda
                marginTop: 20,
                marginLeft: 0, // Ajusta este valor según sea necesario
                fontWeight: 'bold'
    }}>
                 <div className="caja-con-lineas" style={{ width: '783px', position: 'relative' }}>
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
                <div className="caja-con-lineas" style={{ width: '783px', position: 'relative' }}> 
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
                    <p style={{ color: 'grey' }}>Para tener claro cuáles son tus objetivos, cómo te gustaría que fuese la web y todo lo relacionado con tu marca, colores, tono, tendrás que rellenar un pequeño prebriefing que hará posible personalizar todo el diseño posterior a tu gusto.</p>
                   
                  </div>
                )}
                <div className="caja-con-lineas" style={{ width: '783px', position: 'relative' }}>
                <p>En caso de restailling: Servicio puntual SEO</p>
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
                    <p style={{ color: 'grey' }}>¿Restyling? Pues sí, muchas marcas consideran cambiar plenamente su imagen corporativa para renovar todo lo visual, incluso el tono de comunicación o los contenidos que comparte.</p>
                    <p style={{ color: 'grey' }}>Cuando se cambia la imagen de una marca, si ya tienes una web, esta también se ve afectada. Esto no tiene que ser malo, pero cuando se hace sin considerar el SEO, puede echarse a perder todo el trabajo previo si hay cambios importantes, migraciones o modificaciones de código y no está supervisado por un especialista en posicionamiento web.</p>
                    <p style={{ color: 'grey' }}>Por ello, aunque no quieras un servicio SEO completo o recurrente, tan solo necesitarás comunicarnos cómo has trabajo el SEO anteriormente para que tu web se quede como esté y no sufra penalizaciones ni pérdidas de tráfico tras el restyling.</p>
                  </div>
                )}
       
       
       </div>
        
        </div>

        </div>
    </div>
    
      
    
  );
}

export default Lanzamiento;