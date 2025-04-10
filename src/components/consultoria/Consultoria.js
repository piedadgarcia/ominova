import React from 'react';
import Usabilidad from '../usabilidad/Usabilidad';
import AuditoriaWeb from '../auditoriaWeb/AuditoriaWeb';
import OptimizacionSeo from '../optimizacionSeo/OptimizacionSeo';
import './../../App.css';

function Consultoria() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'baseline', // Alinea los elementos verticalmente al centro
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 15,
            width: '50%', // Asegura que el componente ocupe la mitad del ancho del navegador
            boxSizing: 'border-box', // Incluye el padding en el ancho total
          }}
        >
          <div
            style={{
              marginTop: 50,
              marginLeft: -420, // Añade espacio a la izquierda de la figura
            }}
          ></div>
        </div>
        <div
          style={{
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
          }}
        >
          <p> Consultoría </p>
          <div
            style={{
              fontFamily: 'Arial',
              fontSize: '15px',
              fontWeight: 'normal',
              textAlign: 'justify', // Justifica el texto
              padding: '0px 0px',
              width: '95%', // Asegura que el div ocupe el 80% del ancho del navegador
            }}
          >
            <p>
              En Ominova entendemos que cada organización enfrenta desafíos
              únicos que requieren soluciones específicas y efectivas. Por ello,
              ofrecemos un servicio de asesoría que se adapta a las necesidades
              particulares de nuestros clientes, brindando apoyo experto en
              diversas áreas clave. Nuestro equipo de asesores está comprometido
              a proporcionar estrategias que ayuden a optimizar procesos,
              mejorar la gestión y alcanzar los objetivos deseados. A través de
              un enfoque colaborativo, trabajamos de la mano con nuestros
              clientes para ofrecerles el conocimiento y las herramientas
              necesarias para impulsar su desarrollo y éxito. A continuación,
              detallamos los distintos ámbitos en los que ofrecemos nuestro
              servicio de asesoría. Cada uno de ellos está diseñado para abordar
              aspectos esenciales del funcionamiento empresarial y contribuir al
              crecimiento sostenido de su organización.
            </p>
            <p> Descubre cómo hacemos que ocurra: </p>
          </div>
          <div
            style={{
              fontSize: 27,
              fontFamily: 'Arial',
              fontWeight: 'bold',
              width: '95%',
            }}
          >
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
