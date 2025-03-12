import React, { useState } from 'react';
import Usabilidad from '../usabilidad/Usabilidad';
import AuditoriaWeb from '../auditoriaWeb/AuditoriaWeb';
import OptimizacionSeo from '../optimizacionSeo/OptimizacionSeo';
import './../../App.css';

function Consultoria() {
 
  return (
    <div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline', // Alinea los elementos verticalmente al centro
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
            marginLeft: -420 // Añade espacio a la izquierda de la figura
         
            }}>
              
                
        
          </div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start', // Alinea los elementos hacia el inicio del contenedor
          alignItems: 'flex-start', // Asegura que los elementos estén alineados a la izquierda
          fontSize: 40,
          fontFamily: 'Arial',
          fontWeight: 'bold',
          padding: '50px 0px',
          width: '140%', // Asegura que el div ocupe todo el ancho del navegador
          marginLeft: -470,
        }}>
          <p> Consultoría </p>
          <div style={{  
            fontFamily: 'Arial',
            fontSize: '15px',
            fontWeight: 'normal',
            textAlign: 'justify', // Justifica el texto
            padding: '0px 0px',
            width: '95%' // Asegura que el div ocupe el 80% del ancho del navegador
          }}>
            <p> En Ominova estamos especializados en diseño y desarrollo web. Trabajamos con los principales CMS del mercado y ofrecemos páginas web a medida, de una alta calidad y con un enorme rendimiento. Tanto si buscas un ecommerce como una web corporativa sencilla, nos adaptamos a tus necesidades. </p>
            <p> Descubre cómo hacemos que ocurra: </p>
          </div>
          <div style={{
            fontSize: 27,
            fontFamily: 'Arial',
            fontWeight: 'bold',
            width: '95%' 
          }}>
            <Usabilidad />
            <AuditoriaWeb />
            <OptimizacionSeo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultoria;