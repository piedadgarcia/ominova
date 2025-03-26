import React from 'react';

import './../../App.css';

function CasosDeExito1DYDesaWeb() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 15,
          width: '100%', // Asegura que el componente ocupe el ancho del navegador
          boxSizing: 'border-box', // Incluye el padding en el ancho total
        }}
      >
        {/* Título principal */}
        <div
          style={{
            marginTop: 50,
            marginBottom: 25,
            marginLeft: -1100,
            fontSize: 20,
            fontFamily: 'Arial',
            fontWeight: 'bold',
            textAlign: 'left', // Centra el texto
          }}
        >
          <p> Diseño y Desarrollo Web </p>
          <div
            style={{
              fontSize: 15,
              fontWeight: 'bold',
            }}
          >
            <p> SOLUCIÓN </p>
          </div>
        </div>

        <div
          style={{
            fontSize: 22,
            marginLeft: 490,
            marginRight: 170,
            marginTop: -173,
            width: 850,
            padding: 50,
            fontWeight: 'bold',
            textAlign: 'justify',
          }}
        >
          <p>
            Calidad y eficacia que cautivan. Transformando SOTEC en una
            Experiencia Digital Excepcional.
          </p>
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
              Nuestra labor fue diseñar una experiencia visual cautivadora en el
              sitio web. Desde la página de inicio, donde los colores de la
              marca dan vida a la eficiencia y calidad, hasta la navegación
              fluida que facilita encontrar los catálogos de los productos.
              Destacamos los catálogos de cada área especializada con un enfoque
              visual. Cada elemento refleja el compromiso de la empresa con la
              excelencia técnica y la satisfacción del cliente. Cada visita al
              sitio es una muestra de la dedicación de SOTEC a mostrar su oferta
              de manera impactante.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CasosDeExito1DYDesaWeb;
