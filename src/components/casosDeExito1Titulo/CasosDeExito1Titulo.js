import React, { useState } from 'react';

import './../../App.css';


function CasosDeExito1Titulo() {
  return (
    <div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        width: '100%', // Asegura que el componente ocupe el ancho del navegador
        boxSizing: 'border-box' // Incluye el padding en el ancho total
      }}>
        {/* Título principal */}
        <div style={{
          marginTop: 50,
          marginBottom:25,
          marginLeft:-250,
          fontSize: 20,
          fontFamily: 'Arial',
          fontWeight: 'bold',
          textAlign: 'center', // Centra el texto
        }}>
          CHAGAR | PEDRO LUIS
        </div>

        {/* Contenedor de los botones */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px', // Espacio entre los botones
          margin: '10px 0', // Espacio arriba y abajo del contenedor
        }}>
          <button className="elipse-button">Branding</button>
          <button className="elipse-button">SEO</button>
          <button className="elipse-button">Web</button>
        </div>

        {/* Texto descriptivo */}
        <div style={{ 
          fontSize: 22,                 
          marginLeft: 470,
          marginTop: -50,
          width: 850,
          padding: 50,
          marginRight: 90,
          fontWeight: 'bold',
          textAlign: 'justify',

        }}>
          <p>CHAGAR| PEDRO LUIS es un almacén mayorista que se dedica a la distribución de suministros técnicos y venta de materiales especializados para profesionales.</p>
          <div style={{  
            fontFamily: 'Arial',
            fontSize: '15px',
            fontWeight: 'normal',
            textAlign: 'justify', // Justifica el texto
            padding: '0px 0px',
            width: '95%' // Asegura que el div ocupe el 80% del ancho del navegador
          }}>
            <p>En Ominova estamos especializados en diseño y desarrollo web. Trabajamos con los principales CMS del mercado y ofrecemos páginas web a medida, de una alta calidad y con un enorme rendimiento. Tanto si buscas un ecommerce como una web corporativa sencilla, nos adaptamos a tus necesidades.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CasosDeExito1Titulo;